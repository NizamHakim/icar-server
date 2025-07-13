export type Review = {
	rating: number;
	review: string[];
	suggestion: string;
};

export function parseReview(json: string): Review {
	const review = typeof json === "string" ? JSON.parse(json) : json;

	if (typeof review !== "object" || typeof review.rating !== "number") {
		throw new Error();
	}

	return review as Review;
}
