import { Request } from "express";
import { UnprocessableEntityError } from "../UnprocessableEntityError";
import { Result, validationResult } from "express-validator";

export const checkOrThrowValidationError = (req: Request) => {
	const result: Result = validationResult(req);
	if (!result.isEmpty()) {
		const errorBody = result.array().reduce((acc, error) => {
			acc[error.path] = error.msg;
			return acc;
		}, {});
		throw new UnprocessableEntityError("VALIDATION_ERROR", errorBody);
	}
};
