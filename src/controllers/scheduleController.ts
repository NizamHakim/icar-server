import { Request, Response } from "express";
import { scheduleService } from "../services/scheduleService";
import { handleError } from "../errors/core/handleError";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";
import { matchedData } from "express-validator";

export const scheduleController = {
	getScheduleListByStopAndRoute: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const icarStopId = parseInt(data.icarStopId);
			const icarRouteId = parseInt(data.icarRouteId);
			const scheduleList = await scheduleService.getScheduleListByStopAndRoute(
				icarStopId,
				icarRouteId
			);

			res.status(200).json(scheduleList);
		} catch (error) {
			handleError(error, res);
		}
	},
};
