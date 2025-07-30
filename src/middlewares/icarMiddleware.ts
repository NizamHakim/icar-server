import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { validateAuthToken } from "./customValidators/validateAuthToken";

export const icarMiddleware = {
	validateGetIcars: checkSchema({
		icarStopId: {
			optional: true,
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarStop.invalidId,
			},
		},
	}),
	validateGetIcarById: checkSchema({
		icarId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.icar.invalidId,
			},
		},
	}),
};
