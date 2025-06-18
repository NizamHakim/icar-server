export class ExpectedError extends Error {
	statusCode: number;
	body?: object;

	constructor(message: string, statusCode: number, body?: object) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = statusCode;
		this.body = body;
	}
}
