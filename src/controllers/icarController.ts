import { Request, Response } from "express";
import { icarService } from "../services/icarService";
import { handleError } from "../errors/core/handleError";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";
import { matchedData } from "express-validator";

export const icarController = {
	getIcarsWithScheduleByStopId: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const icarStopId = parseInt(data.icarStopId);
			const icars = await icarService.getIcarsWithScheduleByStopId(icarStopId);

			res.status(200).json(icars);
		} catch (error) {
			handleError(error, res);
		}
	},
	verifyIcarId: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const icarId = parseInt(data.icarId);
			const icar = await icarService.verifyIcarId(icarId);

			res.status(200).json(icar);
		} catch (error) {
			handleError(error, res);
		}
	},
};
