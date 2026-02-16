import { Request, Response } from "express";
import { ticketService } from "../services/ticketService";
import { matchedData } from "express-validator";
import { checkOrThrowValidationError } from "../middlewares/checkOrThrowValidationError";
import { handleResponse } from "../utils/handleResponse";
import { messagesUtils } from "../utils/messagesUtils";

export const ticketController = {
  getTickets: async (req: Request, res: Response) => {
    try {
      checkOrThrowValidationError(req);

      const { status } = matchedData(req);
      const userId = req.user!.id!;

      const tickets = await ticketService.getTickets({
        userId: userId,
        status: status,
      });

      handleResponse({
        res: res,
        statusCode: 200,
        data: tickets,
      });
    } catch (error) {
      handleResponse({
        res: res,
        error: error,
      });
    }
  },
  getTicketById: async (req: Request, res: Response) => {
    try {
      checkOrThrowValidationError(req);

      const { ticketId } = matchedData(req);
      const ticket = await ticketService.getTicketById(ticketId);

      handleResponse({
        res: res,
        statusCode: 200,
        data: ticket,
      });
    } catch (error) {
      handleResponse({
        res: res,
        error: error,
      });
    }
  },
  createTicket: async (req: Request, res: Response) => {
    try {
      checkOrThrowValidationError(req);

      const userId = req.user!.id!;

      const { scheduleId } = matchedData(req);
      const ticket = await ticketService.createTicket(userId, scheduleId);

      handleResponse({
        res: res,
        statusCode: 201,
        message: messagesUtils.success.ticketCreated,
        data: ticket,
      });
    } catch (error) {
      handleResponse({
        res: res,
        error: error,
      });
    }
  },
  updateTicket: async (req: Request, res: Response) => {
    try {
      checkOrThrowValidationError(req);

      const { ticketId, status, review } = matchedData(req);

      let ticket, message;
      if (status !== undefined) {
        ticket = await ticketService.updateTicketStatus(ticketId, status);
        message = messagesUtils.success.ticketStatusUpdated;
      } else if (review !== undefined) {
        ticket = await ticketService.updateReview(ticketId, review);
        message = messagesUtils.success.ticketReviewUpdated;
      }

      handleResponse({
        res: res,
        statusCode: 200,
        message: message,
        data: ticket,
      });
    } catch (error) {
      handleResponse({
        res: res,
        error: error,
      });
    }
  },
  getTicketsDistance: async (req: Request, res: Response) => {
    try {
      checkOrThrowValidationError(req);

      const userId = req.user!.id!;
      const icar = req.icar!;

      const distanceStatusList = await ticketService.getTicketsDistance(
        userId,
        icar.id!,
        icar.position!,
      );

      res.status(200).json(distanceStatusList);
    } catch (error) {
      handleResponse({
        res: res,
        error: error,
      });
    }
  },
};
