import { scheduleRepository } from "../repositories/scheduleRepository";
import { ticketRepository } from "../repositories/ticketRepository";
import { datetime } from "../utils/datetime";

export const scheduleService = {
	// USECASE
	getSchedulesByStopAndRoute: async (
		icarStopId: number,
		icarRouteId: number
	) => {
		const scheduleList = await scheduleRepository.getScheduleListByStopAndRoute(
			icarStopId,
			icarRouteId
		);

		const response = await Promise.all(
			scheduleList.map(async (schedule) => {
				const todayArrivalTime = datetime.timeToDate(schedule.arrivalTime);
				const ticketCounts = await ticketRepository.ticketCountByArrivedAt(
					todayArrivalTime
				);

				return {
					...schedule,
					arrivalTime: todayArrivalTime,
					ticketCount: ticketCounts,
				};
			})
		);

		return response;
	},
	// FALLBACK
	getSchedules: async () => {
		return await scheduleRepository.getSchedules();
	},
};
