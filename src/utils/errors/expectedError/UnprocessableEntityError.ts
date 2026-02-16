import { ExpectedError } from "./ExpectedError";


export class UnprocessableEntityError extends ExpectedError {
	constructor(message: string, body?: object) {
		super(message, 422);
		this.body = body;
	}
}
