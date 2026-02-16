import { Request } from "express";
import { Result, validationResult } from "express-validator";
import { UnprocessableEntityError } from "../utils/errors/expectedError/UnprocessableEntityError";
import { messagesUtils } from "../utils/messagesUtils";

export const checkOrThrowValidationError = (req: Request) => {
	const result: Result = validationResult(req);
	if (!result.isEmpty()) {
		const errorBody = result.array().reduce((acc, error) => {
			acc[error.path] = error.msg;
			return acc;
		}, {});
		throw new UnprocessableEntityError(messagesUtils.error.unprocessableEntity, errorBody);
	}
};
