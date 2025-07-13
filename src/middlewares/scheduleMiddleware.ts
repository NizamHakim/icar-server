import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { validateAuthToken } from "./customValidators/validateAuthToken";

export const scheduleMiddleware = {
	validateGetSchedules: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		icarStopId: {
			optional: true,
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarStop.invalidId,
			},
		},
		icarRouteId: {
			optional: true,
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarRoute.invalidId,
			},
		},
	}),
};
