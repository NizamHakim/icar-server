import { checkSchema } from "express-validator";
import { validateUser } from "./customValidators/validateUser";
import { messagesUtils } from "../utils/messagesUtils";

export const icarStopMiddleware = {
	validateGetStops: checkSchema({
		"x-user-position": {
			custom: {
				bail: true,
				options: validateUser.position,
				errorMessage: messagesUtils.error.user.invalidPosition,
			},
		},
	}),
	validateGetStopById: checkSchema({
		"x-user-position": {
			custom: {
				bail: true,
				options: validateUser.position,
				errorMessage: messagesUtils.error.user.invalidPosition,
			},
		},
		icarStopId: {
			isInt: {
				bail: true,
				errorMessage: messagesUtils.error.icarStop.invalidId,
			},
			toInt: true,
		},
	}),
};
