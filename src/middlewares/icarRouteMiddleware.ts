import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { validateAuthToken } from "./customValidators/validateAuthToken";

export const icarRouteMiddleware = {
	validateGetRoutes: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		polyline: {
			optional: true,
			isBoolean: {
				bail: true,
				errorMessage: errorMessages.icarRoute.invalidPolyline,
			},
		},
	}),
	validateGetRouteById: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		icarRouteId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarRoute.invalidId,
			},
		},
	}),
};
