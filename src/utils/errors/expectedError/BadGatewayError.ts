import { ExpectedError } from "./ExpectedError";

export class BadGatewayError extends ExpectedError {
	constructor(message: string) {
		super(message, 502);
	}
}
