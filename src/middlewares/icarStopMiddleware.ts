import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { validateUserPosition } from "./customValidators/validateUserPosition";
import { validateAuthToken } from "./customValidators/validateAuthToken";

export const icarStopMiddleware = {
	validateGetStops: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		"x-user-position": {
			custom: {
				bail: true,
				options: validateUserPosition,
				errorMessage: errorMessages.user.invalidPosition,
			},
		},
	}),
	validateGetStopById: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		"x-user-position": {
			custom: {
				bail: true,
				options: validateUserPosition,
				errorMessage: errorMessages.user.invalidPosition,
			},
		},
		icarStopId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarStop.invalidId,
			},
		},
	}),
};
