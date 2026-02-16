import { Request, Response } from "express";
import { icarStopService } from "../services/icarStopService";
import { checkOrThrowValidationError } from "../middlewares/checkOrThrowValidationError";
import { matchedData } from "express-validator";
import { handleResponse } from "../utils/handleResponse";

export const icarStopController = {
	getStops: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userPosition = req.user!.position!;

			const icarStops = await icarStopService.getStops(userPosition);

			handleResponse({
				res: res,
				statusCode: 200,
				data: icarStops
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
	getStopById: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { icarStopId } = matchedData(req);
			const userPosition = req.user!.position!;

			const icarStop = await icarStopService.getStopById(
				icarStopId,
				userPosition
			);

			handleResponse({
				res: res,
				statusCode: 200,
				data: icarStop
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
};
