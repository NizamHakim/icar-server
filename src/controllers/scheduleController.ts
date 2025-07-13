import { Request, Response } from "express";
import { scheduleService } from "../services/scheduleService";
import { handleError } from "../errors/core/handleError";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";
import { matchedData } from "express-validator";

export const scheduleController = {
	getSchedules: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);

			if (data.icarStopId && data.icarRouteId) {
				const icarStopId = parseInt(data.icarStopId);
				const icarRouteId = parseInt(data.icarRouteId);
				const schedules = await scheduleService.getSchedulesByStopAndRoute(
					icarStopId,
					icarRouteId
				);
				res.status(200).json(schedules);
				return;
			}

			const schedules = await scheduleService.getSchedules();
			res.status(200).json(schedules);
		} catch (error) {
			handleError(error, res);
		}
	},
};
