import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { validateAuthToken } from "./customValidators/validateAuthToken";

export const reviewMiddleware = {
	validateGetReviewOptions: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
	}),
};
