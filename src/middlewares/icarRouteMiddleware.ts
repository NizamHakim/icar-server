import { checkSchema } from "express-validator";
import { messagesUtils } from "../utils/messagesUtils";

export const icarRouteMiddleware = {
	validateGetRoutes: checkSchema({
		polyline: {
			optional: true,
			isBoolean: {
				bail: true,
				errorMessage: messagesUtils.error.icarRoute.invalidPolyline,
			},
			toBoolean: true,
		},
	}),
	validateGetRouteById: checkSchema({
		icarRouteId: {
			isInt: {
				bail: true,
				errorMessage: messagesUtils.error.icarRoute.invalidId,
			},
			toInt: true,
		},
	}),
};
