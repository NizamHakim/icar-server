import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { authService } from "../services/authService";
import { handleError } from "../errors/core/handleError";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";

export const authController = {
	getUserData: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userId = req.user!.id;
			const user = await authService.getUserData(userId!);

			res.status(200).json(user);
		} catch (error) {
			handleError(error, res);
		}
	},
	login: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { email, password } = matchedData(req);
			const user = await authService.login(email, password);

			res.status(200).json(user);
		} catch (error) {
			handleError(error, res);
		}
	},
	signup: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const { name, email, password } = matchedData(req);
			const newUser = await authService.signup(name, email, password);

			res.status(201).json(newUser);
		} catch (error) {
			handleError(error, res);
		}
	},
	logout: async (req: Request, res: Response) => {},
};
