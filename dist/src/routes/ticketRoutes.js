"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticketController_1 = require("../controllers/ticketController");
const ticketMiddleware_1 = require("../middlewares/ticketMiddleware");
const router = express_1.default.Router();
router.get("/user/:userId/status/:status", ticketMiddleware_1.ticketMiddleware.validateGetTicketByStatus, ticketController_1.ticketController.getTicketByStatus);
router.get("/user/:userId/closest", ticketMiddleware_1.ticketMiddleware.validateGetClosestUserTicket, ticketController_1.ticketController.getClosestUserTicket);
router.get("/review-options", ticketController_1.ticketController.getReviewAndSuggestionOptions);
router.get("/:ticketId", ticketMiddleware_1.ticketMiddleware.validateGetTicketById, ticketController_1.ticketController.getTicketById);
router.post("/create", ticketMiddleware_1.ticketMiddleware.validateCreateTicket, ticketController_1.ticketController.createTicket);
router.post("/:ticketId/cancel", ticketMiddleware_1.ticketMiddleware.validateCancelTicket, ticketController_1.ticketController.cancelTicket);
router.post("/:ticketId/finish", ticketMiddleware_1.ticketMiddleware.validateFinishTicket, ticketController_1.ticketController.finishTicket);
router.post("/distance-status", ticketMiddleware_1.ticketMiddleware.validateDistanceStatus, ticketController_1.ticketController.distanceStatus);
router.post("/:ticketId/review", ticketMiddleware_1.ticketMiddleware.validateUpdateReview, ticketController_1.ticketController.updateReview);
exports.default = router;
