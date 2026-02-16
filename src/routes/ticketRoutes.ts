import express from "express";
import { ticketController } from "../controllers/ticketController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { ticketMiddleware } from "../middlewares/ticketMiddleware";

const router = express.Router();

router.get(
	"/distance",
	authMiddleware.validateToken,
	ticketMiddleware.validateGetTicketsDistance,
	ticketController.getTicketsDistance
);

router.get(
	"/",
	authMiddleware.validateToken,
	ticketMiddleware.validateGetTickets,
	ticketController.getTickets
);

router.get(
	"/:ticketId",
	authMiddleware.validateToken,
	ticketMiddleware.validateGetTicketById,
	ticketController.getTicketById
);

router.post(
	"/create",
	authMiddleware.validateToken,
	ticketMiddleware.validateCreateTicket,
	ticketController.createTicket
);

router.patch(
	"/:ticketId",
	authMiddleware.validateToken,
	ticketMiddleware.validateUpdateTicket,
	ticketController.updateTicket
);

export default router;
