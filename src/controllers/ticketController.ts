import { Request, Response } from "express";
import { ticketService } from "../services/ticketService";
import { matchedData } from "express-validator";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";
import { handleError } from "../errors/core/handleError";
import { Review } from "../types/review";

export const ticketController = {
	getClosestTicket: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userId = req.user!.id!;
			const ticket = await ticketService.getClosestTicket(userId);

			res.status(200).json(ticket);
		} catch (error) {
			handleError(error, res);
		}
	},
	getTickets: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const userId = req.user!.id!;

			if (data.status) {
				const status = data.status;
				const tickets = await ticketService.getTicketsByStatus(userId, status);
				res.status(200).json(tickets);
				return;
			}

			const tickets = await ticketService.getTickets(userId);
			res.status(200).json(tickets);
		} catch (error) {
			handleError(error, res);
		}
	},
	getTicketById: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const ticketId = parseInt(data.ticketId);
			const ticket = await ticketService.getTicketById(ticketId);

			res.status(200).json(ticket);
		} catch (error) {
			handleError(error, res);
		}
	},
	createTicket: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userId = req.user!.id!;

			const data = matchedData(req);
			const scheduleId = parseInt(data.scheduleId);
			const ticket = await ticketService.createTicket(userId, scheduleId);

			res.status(201).json(ticket);
		} catch (error) {
			handleError(error, res);
		}
	},
	updateTicket: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const ticketId = parseInt(data.ticketId);

			if (data.status) {
				const status = data.status;
				const ticket = await ticketService.updateTicketStatus(ticketId, status);
				res.status(200).json(ticket);
				return;
			} else if (data.review) {
				const review = data.review as Review;
				const ticket = await ticketService.updateReview(ticketId, review);
				res.status(200).json(ticket);
				return;
			}
		} catch (error) {
			handleError(error, res);
		}
	},
	getTicketsDistance: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const userId = req.user!.id!;
			const icarId = req.icar!.id!;
			const icarPosition = req.icar!.position!;

			const distanceStatusList = await ticketService.getTicketsDistance(
				userId,
				icarId,
				icarPosition
			);

			res.status(200).json(distanceStatusList);
		} catch (error) {
			handleError(error, res);
		}
	},
};
