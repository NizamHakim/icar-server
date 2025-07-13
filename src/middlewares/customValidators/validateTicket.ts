import { TicketStatus } from "@prisma/client";
import { parseReview } from "../../types/review";

export const validateTicket = {
	validStatus: async (value: any, { req }: { req: any }) => {
		const validStatuses = Object.values(TicketStatus);
		if (!validStatuses.includes(value as TicketStatus)) {
			throw new Error();
		}

		return true;
	},
	validReview: async (value: any, { req }: { req: any }) => {
		const review = parseReview(value);
		return true;
	},
};
