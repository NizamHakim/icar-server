import { Request, Response } from "express";
import { scheduleService } from "../services/scheduleService";
import { checkOrThrowValidationError } from "../middlewares/checkOrThrowValidationError";
import { matchedData } from "express-validator";
import { handleResponse } from "../utils/handleResponse";

export const scheduleController = {
	getSchedules: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { icarStopId, icarRouteId } = matchedData(req);

			let schedules;
			if (icarStopId !== undefined && icarRouteId !== undefined) {
				schedules = await scheduleService.getSchedulesByStopAndRoute(icarStopId, icarRouteId);
			} else {
				schedules = await scheduleService.getSchedules();
			}

			handleResponse({
				res: res,
				statusCode: 200,
				data: schedules
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
};
