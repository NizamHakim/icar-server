import express from "express";
import { ticketController } from "../controllers/ticketController";
import { ticketMiddleware } from "../middlewares/ticketMiddleware";

const router = express.Router();

router.get(
	"/user/:userId/status/:status",
	ticketMiddleware.validateGetTicketByStatus,
	ticketController.getTicketByStatus
);
router.get(
	"/user/:userId/closest",
	ticketMiddleware.validateGetClosestUserTicket,
	ticketController.getClosestUserTicket
);

router.get("/review-options", ticketController.getReviewAndSuggestionOptions);

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

router.post(
	"/:ticketId/cancel",
	ticketMiddleware.validateCancelTicket,
	ticketController.cancelTicket
);

router.post(
	"/:ticketId/finish",
	ticketMiddleware.validateFinishTicket,
	ticketController.finishTicket
);

router.post(
	"/distance-status",
	ticketMiddleware.validateDistanceStatus,
	ticketController.distanceStatus
);

router.post(
	"/:ticketId/review",
	ticketMiddleware.validateUpdateReview,
	ticketController.updateReview
);

export default router;
