import { ExpectedError } from "./core/ExpectedError";

export class NotFoundError extends ExpectedError {
	constructor(message: string) {
		super(message, 404);
	}
}
