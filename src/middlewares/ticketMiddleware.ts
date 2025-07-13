import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { validateAuthToken } from "./customValidators/validateAuthToken";
import { validateTicket } from "./customValidators/validateTicket";
import { validateIcar } from "./customValidators/validateIcar";

export const ticketMiddleware = {
	validateGetClosestTicket: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
	}),
	validateGetTickets: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		status: {
			optional: true,
			custom: {
				bail: true,
				options: validateTicket.validStatus,
				errorMessage: errorMessages.ticket.invalidStatus,
			},
		},
	}),
	validateGetTicketById: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		ticketId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.ticket.invalidId,
			},
		},
	}),
	validateCreateTicket: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		scheduleId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.schedule.invalidId,
			},
		},
	}),
	validateUpdateTicket: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		ticketId: {
			isInt: {
				bail: true,
				errorMessage: errorMessages.ticket.invalidId,
			},
		},
		status: {
			optional: true,
			custom: {
				bail: true,
				options: validateTicket.validStatus,
				errorMessage: errorMessages.ticket.invalidStatus,
			},
		},
		review: {
			optional: true,
			custom: {
				bail: true,
				options: validateTicket.validReview,
				errorMessage: errorMessages.ticket.invalidReview,
			},
		},
	}),
	validateGetTicketsDistance: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
		"x-icar": {
			custom: {
				bail: true,
				options: validateIcar,
				errorMessage: errorMessages.icar.invalidId,
			},
		},
	}),
};
