import { TicketStatus } from "../../../generated/prisma/enums";
import { parseReview } from "../../utils/parseReview";

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
