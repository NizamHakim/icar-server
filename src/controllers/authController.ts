import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { authService } from "../services/authService";
import { checkOrThrowValidationError } from "../middlewares/checkOrThrowValidationError";
import { handleResponse } from "../utils/handleResponse";
import { messagesUtils } from "../utils/messagesUtils";

export const authController = {
	getUserData: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userId = req.user!.id!;

			const user = await authService.getUserData(userId);

			handleResponse({
				res: res,
				statusCode: 200,
				data: user
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
	login: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { email, password } = matchedData(req);
			const user = await authService.login(email, password);

			handleResponse({
				res: res,
				statusCode: 200,
				message: messagesUtils.success.loginSuccess,
				data: user
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
	signup: async (req: Request, res: Response) => {
		try {
			console.log(req);
			checkOrThrowValidationError(req);

			const { name, email, password } = matchedData(req);
			const newUser = await authService.signup(name, email, password);

			handleResponse({
				res: res,
				statusCode: 201,
				message: messagesUtils.success.userCreated,
				data: newUser
			});
		} catch (error) {
			handleResponse({
				res: res,
				error: error,
			});
		}
	},
	logout: async (req: Request, res: Response) => { },
};
