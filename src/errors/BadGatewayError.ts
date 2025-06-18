import { ExpectedError } from "./core/ExpectedError";

export class BadGatewayError extends ExpectedError {
	constructor(message: string) {
		super(message, 502);
	}
}
