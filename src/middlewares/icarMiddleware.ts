import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";

export const icarMiddleware = {
	validateGetIcarsWithScheduleByStopId: checkSchema(
		{
			icarStopId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.icarStop.invalidId,
				},
			},
		},
		["params"]
	),
	validateVerifyIcarId: checkSchema(
		{
			icarId: {
				notEmpty: {
					bail: true,
					errorMessage: "iCar ID is required",
				},
				isInt: {
					bail: true,
					errorMessage: "iCar ID is invalid",
				},
			},
		},
		["body"]
	),
};
