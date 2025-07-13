import { scheduleRepository } from "../repositories/scheduleRepository";

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

		return scheduleList;
	},
	// FALLBACK
	getSchedules: async () => {
		return await scheduleRepository.getSchedules();
	},
};
