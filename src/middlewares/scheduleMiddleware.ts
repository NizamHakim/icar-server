import { checkSchema } from "express-validator";
import { messagesUtils } from "../utils/messagesUtils";

export const scheduleMiddleware = {
	validateGetSchedules: checkSchema({
		icarStopId: {
			optional: true,
			isInt: {
				bail: true,
				errorMessage: messagesUtils.error.icarStop.invalidId,
			},
			toInt: true,
		},
		icarRouteId: {
			optional: true,
			isInt: {
				bail: true,
				errorMessage: messagesUtils.error.icarRoute.invalidId,
			},
			toInt: true,
		},
	}),
};
