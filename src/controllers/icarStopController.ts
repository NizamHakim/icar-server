import { Request, Response } from "express";
import { icarStopService } from "../services/icarStopService";
import { handleError } from "../errors/core/handleError";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";
import { matchedData } from "express-validator";

export const icarStopController = {
	getAllStops: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userPosition = req.user!.position!;
			const icarStops = await icarStopService.getAllStops(userPosition);

			res.status(200).json(icarStops);
		} catch (error) {
			handleError(error, res);
		}
	},
	getStopById: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const icarStopId = parseInt(data.icarStopId);
			const userPosition = req.user!.position!;

			const icarStop = await icarStopService.getStopById(
				icarStopId,
				userPosition
			);

			res.status(200).json(icarStop);
		} catch (error) {
			handleError(error, res);
		}
	},
};
