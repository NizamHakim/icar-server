import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";

export const scheduleMiddleware = {
	validateGetScheduleListByStopAndRoute: checkSchema(
		{
			icarStopId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.icarStop.invalidId,
				},
			},
			icarRouteId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.icarRoute.invalidId,
				},
			},
		},
		["params"]
	),
};
