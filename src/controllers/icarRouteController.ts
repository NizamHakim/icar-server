import { Request, Response } from "express";
import { icarRouteService } from "../services/icarRouteService";
import { handleError } from "../errors/core/handleError";
import { matchedData } from "express-validator";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";

export const icarRouteController = {
	getRoutes: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);
			const data = matchedData(req);

			if (data.polyline) {
				const routes = await icarRouteService.getRoutesWithPolylines();
				res.status(200).json(routes);
				return;
			}

			const routes = await icarRouteService.getRoutes();
			res.status(200).json(routes);
		} catch (error) {
			handleError(error, res);
		}
	},
	getRouteById: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const icarRouteId = parseInt(data.icarRouteId);

			const route = await icarRouteService.getRouteById(icarRouteId);
			res.status(200).json(route);
		} catch (error) {
			handleError(error, res);
		}
	},
};
