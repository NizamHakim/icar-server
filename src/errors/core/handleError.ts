import { Response } from "express";
import { ExpectedError } from "./ExpectedError";

export const handleError = (error: any, res: Response) => {
	console.error("Error occurred:", error);
	if (error instanceof ExpectedError) {
		res
			.status(error.statusCode)
			.json({ error: error.message, body: error.body });
	} else {
		res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
	}
};
