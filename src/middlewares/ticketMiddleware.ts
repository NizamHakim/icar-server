import { checkSchema } from "express-validator";
import { errorMessages } from "../errors/core/errorMessages";
import { TicketStatus } from "@prisma/client";
import { Coordinate } from "../types/coordinate";
import { Review } from "../types/review";

export const ticketMiddleware = {
	validateGetTicketByStatus: checkSchema(
		{
			userId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.user.invalidId,
				},
			},
			status: {
				custom: {
					bail: true,
					options: async (value, { req }) => {
						const validStatuses = Object.values(TicketStatus);
						if (!validStatuses.includes(value as TicketStatus)) {
							throw new Error(errorMessages.ticket.invalidStatus);
						}

						return true;
					},
					errorMessage: errorMessages.ticket.invalidStatus,
				},
			},
		},
		["params"]
	),
	validateGetClosestUserTicket: checkSchema(
		{
			userId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.user.invalidId,
				},
			},
		},
		["params"]
	),
	validateGetTicketById: checkSchema(
		{
			ticketId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.ticket.invalidId,
				},
			},
		},
		["params"]
	),
	validateCreateTicket: checkSchema(
		{
			userId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.user.invalidId,
				},
			},
			scheduleId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.schedule.invalidId,
				},
			},
		},
		["body"]
	),
	validateCancelTicket: checkSchema(
		{
			ticketId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.ticket.invalidId,
				},
			},
		},
		["params"]
	),
	validateFinishTicket: checkSchema(
		{
			ticketId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.ticket.invalidId,
				},
			},
		},
		["params"]
	),
	validateDistanceStatus: checkSchema(
		{
			userId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.user.invalidId,
				},
			},
			icarId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.icar.invalidId,
				},
			},
			position: {
				custom: {
					bail: true,
					options: async (value, { req }) => {
						const icarPosition = value as Coordinate;

						req.icar = { position: icarPosition };
						return true;
					},
					errorMessage: errorMessages.icar.invalidPosition,
				},
			},
		},
		["body"]
	),
	validateUpdateReview: checkSchema(
		{
			ticketId: {
				isInt: {
					bail: true,
					errorMessage: errorMessages.ticket.invalidId,
				},
			},
		},
		["params"]
	),
};
