import { Request, Response } from "express";
import { icarService } from "../services/icarService";
import { checkOrThrowValidationError } from "../middlewares/checkOrThrowValidationError";
import { matchedData } from "express-validator";
import { handleResponse } from "../utils/handleResponse";

export const icarController = {
	getIcars: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { icarStopId } = matchedData(req);

			let icars;
			if (icarStopId !== undefined) {
				icars = await icarService.getIcarsWithSchedulesByStopId(icarStopId);
			} else {
				icars = await icarService.getIcars();
			}

			handleResponse({
				res: res,
				statusCode: 200,
				data: icars
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
	getIcarById: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { icarId } = matchedData(req);
			const icar = await icarService.getIcarById(icarId);

			handleResponse({
				res: res,
				statusCode: 200,
				data: icar
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
};
