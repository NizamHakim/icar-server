import { checkSchema } from "express-validator";
import { validateTicket } from "./customValidators/validateTicket";
import { validateIcar } from "./customValidators/validateIcar";
import { messagesUtils } from "../utils/messagesUtils";

export const ticketMiddleware = {
  validateGetTicketsDistance: checkSchema({
    "x-icar": {
      custom: {
        bail: true,
        options: validateIcar,
        errorMessage: messagesUtils.error.icar.invalidId,
      },
    },
  }),
  validateGetTickets: checkSchema({
    status: {
      optional: true,
      custom: {
        bail: true,
        options: validateTicket.validStatus,
        errorMessage: messagesUtils.error.ticket.invalidStatus,
      },
    },
  }),
  validateGetTicketById: checkSchema({
    ticketId: {
      isInt: {
        bail: true,
        errorMessage: messagesUtils.error.ticket.invalidId,
      },
      toInt: true,
    },
  }),
  validateCreateTicket: checkSchema({
    scheduleId: {
      isInt: {
        bail: true,
        errorMessage: messagesUtils.error.schedule.invalidId,
      },
      toInt: true,
    },
  }),
  validateUpdateTicket: checkSchema({
    ticketId: {
      isInt: {
        bail: true,
        errorMessage: messagesUtils.error.ticket.invalidId,
      },
      toInt: true,
    },
    status: {
      optional: true,
      custom: {
        bail: true,
        options: validateTicket.validStatus,
        errorMessage: messagesUtils.error.ticket.invalidStatus,
      },
    },
    review: {
      optional: true,
      custom: {
        bail: true,
        options: validateTicket.validReview,
        errorMessage: messagesUtils.error.ticket.invalidReview,
      },
    },
  }),
};
