import express from "express";
import { ticketController } from "../controllers/ticketController";
import { ticketMiddleware } from "../middlewares/ticketMiddleware";

const router = express.Router();

router.get(
	"/closest",
	ticketMiddleware.validateGetClosestTicket,
	ticketController.getClosestTicket
);

router.get(
	"/distance",
	ticketMiddleware.validateGetTicketsDistance,
	ticketController.getTicketsDistance
);

router.get(
	"/",
	ticketMiddleware.validateGetTickets,
	ticketController.getTickets
);

router.get(
	"/:ticketId",
	ticketMiddleware.validateGetTicketById,
	ticketController.getTicketById
);

router.post(
	"/create",
	ticketMiddleware.validateCreateTicket,
	ticketController.createTicket
);

router.patch(
	"/:ticketId",
	ticketMiddleware.validateUpdateTicket,
	ticketController.updateTicket
);

export default router;
