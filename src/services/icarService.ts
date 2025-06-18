import { disconnect } from "process";
import { IcarStatus } from "@prisma/client";
import { errorMessages } from "../errors/core/errorMessages";
import { UnprocessableEntityError } from "../errors/UnprocessableEntityError";
import { icarRepository } from "../repositories/icarRepository";
import { ticketRepository } from "../repositories/ticketRepository";

export const icarService = {
	getIcarsWithScheduleByStopId: async (icarStopId: number) => {
		const icarList = await icarRepository.getIcarsWithScheduleByStopId(
			icarStopId
		);

		return icarList.filter((icar) => {
			return icar.schedules.length > 0;
		});
	},
	verifyIcarId: async (icarId: number) => {
		const icar = await icarRepository.getIcarById(icarId);
		if (!icar) {
			throw new UnprocessableEntityError("VALIDATION_ERROR", {
				icarId: "iCar with this ID does not exist",
			});
		}
		return icar;
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
};
