import { IcarStatus } from "@prisma/client";
import { errorMessages } from "../errors/core/errorMessages";
import { icarRepository } from "../repositories/icarRepository";
import { ticketRepository } from "../repositories/ticketRepository";
import { NotFoundError } from "../errors/NotFoundError";
import { schedule } from "node-cron";
import { datetime } from "../utils/datetime";

export const icarService = {
	// USE CASE
	getIcarsWithScheduleByStopId: async (icarStopId: number) => {
		let icarList = await icarRepository.getIcarsWithScheduleByStopId(
			icarStopId
		);

		icarList = icarList.filter((icar) => {
			return icar.schedules.length > 0;
		});

		icarList.forEach((icar) => {
			icar.schedules = icar.schedules.map((schedule) => {
				return {
					...schedule,
					arrivalTime: datetime.timeToDate(schedule.arrivalTime),
				};
			});
		});

		return icarList;
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
