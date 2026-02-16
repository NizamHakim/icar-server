import { Request, Response } from "express";
import { icarRouteService } from "../services/icarRouteService";
import { matchedData } from "express-validator";
import { checkOrThrowValidationError } from "../middlewares/checkOrThrowValidationError";
import { handleResponse } from "../utils/handleResponse";

export const icarRouteController = {
	getRoutes: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);
			const { polyline } = matchedData(req);

			let routes;
			if (polyline !== undefined && polyline == true) {
				routes = await icarRouteService.getRoutesWithPolylines();
			} else {
				routes = await icarRouteService.getRoutes();
			}

			handleResponse({
				res: res,
				statusCode: 200,
				data: routes
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
	getRouteById: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { icarRouteId } = matchedData(req);
			const route = await icarRouteService.getRouteById(icarRouteId);

			handleResponse({
				res: res,
				statusCode: 200,
				data: route,
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
};
