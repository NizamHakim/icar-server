import { IcarStatus } from "@prisma/client";
import { errorMessages } from "../errors/core/errorMessages";
import { icarRepository } from "../repositories/icarRepository";
import { ticketRepository } from "../repositories/ticketRepository";
import { NotFoundError } from "../errors/NotFoundError";

export const icarService = {
	// USE CASE
	getIcarsWithScheduleByStopId: async (icarStopId: number) => {
		const icarList = await icarRepository.getIcarsWithScheduleByStopId(
			icarStopId
		);
		return icarList.filter((icar) => {
			return icar.schedules.length > 0;
		});
	},
	connectIcar: async (icarIdStr: string) => {
		const icarId = parseInt(icarIdStr);
		if (isNaN(icarId)) {
			throw new Error(errorMessages.icar.invalidId);
		}
		await icarRepository.updateIcarStatus(icarId, IcarStatus.ACTIVE);
	},
	disconnectIcar: async (icarId: number) => {
		await icarRepository.updateIcarStatus(icarId, IcarStatus.INACTIVE);
		await ticketRepository.cancelTicketsByIcarId(icarId);
		return await icarRepository.getIcarById(icarId);
	},
	// FALLBACK
	getIcars: async () => {
		return await icarRepository.getIcars();
	},
	getIcarById: async (icarId: number) => {
		const icar = await icarRepository.getIcarById(icarId);
		if (!icar) {
			throw new NotFoundError(errorMessages.icar.notFound);
		}
		return icar;
	},
};
