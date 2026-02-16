import { checkSchema } from "express-validator";
import { messagesUtils } from "../utils/messagesUtils";

export const icarMiddleware = {
	validateGetIcars: checkSchema({
		icarStopId: {
			optional: true,
			isInt: {
				bail: true,
				errorMessage: messagesUtils.error.icarStop.invalidId,
			},
			toInt: true,
		},
	}),
	validateGetIcarById: checkSchema({
		icarId: {
			isInt: {
				bail: true,
				errorMessage: messagesUtils.error.icar.invalidId,
			},
			toInt: true,
		},
	}),
};
