import { reviewRepository } from "../repositories/reviewRepository";

export const reviewService = {
	getReviewOptions: () => {
		return {
			reviewOptions: reviewRepository.getReviewOptions(),
		};
	},
};
