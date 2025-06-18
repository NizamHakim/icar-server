import { Request, Response } from "express";
import { ticketService } from "../services/ticketService";
import { matchedData } from "express-validator";
import { checkOrThrowValidationError } from "../errors/core/checkOrThrowValidationError";
import { handleError } from "../errors/core/handleError";
import { Review } from "../types/review";

export const ticketController = {
	getTicketByStatus: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const userId = parseInt(data.userId);
			const status = data.status;
			const tickets = await ticketService.getTicketByStatus(userId, status);

			res.status(200).json(tickets);
		} catch (error) {
			handleError(error, res);
		}
	},
	getClosestUserTicket: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const userId = parseInt(data.userId);
			const ticket = await ticketService.getClosestUserTicket(userId);

			res.status(200).json(ticket);
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

			const data = matchedData(req);
			const userId = parseInt(data.userId);
			const scheduleId = parseInt(data.scheduleId);
			const ticket = await ticketService.createTicket(userId, scheduleId);

			res.status(201).json(ticket);
		} catch (error) {
			handleError(error, res);
		}
	},
	cancelTicket: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const ticketId = parseInt(data.ticketId);
			const updatedTicket = await ticketService.cancelTicket(ticketId);

			res.status(200).json(updatedTicket);
		} catch (error) {
			handleError(error, res);
		}
	},
	finishTicket: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const ticketId = parseInt(data.ticketId);
			const updatedTicket = await ticketService.finishTicket(ticketId);

			res.status(200).json(updatedTicket);
		} catch (error) {
			handleError(error, res);
		}
	},
	distanceStatus: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const userId = parseInt(data.userId);
			const icarId = parseInt(data.icarId);
			const position = req.icar!.position!;

			const distanceStatusList = await ticketService.distanceStatus(
				userId,
				icarId,
				position
			);

			res.status(200).json(distanceStatusList);
		} catch (error) {
			handleError(error, res);
		}
	},
	getReviewAndSuggestionOptions: (req: Request, res: Response) => {
		try {
			const reviewOptions = ticketService.getReviewAndSuggestionOptions();

			res.status(200).json(reviewOptions);
		} catch (error) {
			handleError(error, res);
		}
	},
	updateReview: async (req: Request, res: Response) => {
		try {
			checkOrThrowValidationError(req);

			const data = matchedData(req);
			const ticketId = parseInt(data.ticketId);
			const review = req.body as Review;
			const updatedTicket = await ticketService.updateReview(ticketId, review);

			res.status(200).json(updatedTicket);
		} catch (error) {
			handleError(error, res);
		}
	},
};
