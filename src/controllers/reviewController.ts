import { Request, Response } from "express";
import { handleError } from "../errors/core/handleError";
import { reviewService } from "../services/reviewService";

export const reviewController = {
	getReviewOptions: async (req: Request, res: Response) => {
		try {
			const reviewOptions = reviewService.getReviewOptions();
			res.status(200).json(reviewOptions);
		} catch (error) {
			handleError(error, res);
		}
	},
};
