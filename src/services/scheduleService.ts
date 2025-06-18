import { scheduleRepository } from "../repositories/scheduleRepository";

export const scheduleService = {
	getScheduleListByStopAndRoute: async (
		icarStopId: number,
		icarRouteId: number
	) => {
		const scheduleList = await scheduleRepository.getScheduleListByStopAndRoute(
			icarStopId,
			icarRouteId
		);

		return scheduleList;
	},
};
