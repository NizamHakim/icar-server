"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticketController_1 = require("../controllers/ticketController");
const ticketMiddleware_1 = require("../middlewares/ticketMiddleware");
const router = express_1.default.Router();
router.get("/closest", ticketMiddleware_1.ticketMiddleware.validateGetClosestTicket, ticketController_1.ticketController.getClosestTicket);
router.get("/distance", ticketMiddleware_1.ticketMiddleware.validateGetTicketsDistance, ticketController_1.ticketController.getTicketsDistance);
router.get("/", ticketMiddleware_1.ticketMiddleware.validateGetTickets, ticketController_1.ticketController.getTickets);
router.get("/:ticketId", ticketMiddleware_1.ticketMiddleware.validateGetTicketById, ticketController_1.ticketController.getTicketById);
router.post("/create", ticketMiddleware_1.ticketMiddleware.validateCreateTicket, ticketController_1.ticketController.createTicket);
router.patch("/:ticketId", ticketMiddleware_1.ticketMiddleware.validateUpdateTicket, ticketController_1.ticketController.updateTicket);
exports.default = router;
