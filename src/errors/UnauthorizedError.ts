import { ExpectedError } from "./core/ExpectedError";

export class UnauthorizedError extends ExpectedError {
	constructor(message: string) {
		super(message, 401);
	}
}
