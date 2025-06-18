import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";

export const icarRouteMiddleware = {
	validateGetRouteById: checkSchema({
		icarRouteId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.icarRoute.invalidId,
			},
		},
	}),
};
