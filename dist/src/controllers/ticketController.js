"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketController = void 0;
const ticketService_1 = require("../services/ticketService");
const express_validator_1 = require("express-validator");
const checkOrThrowValidationError_1 = require("../errors/core/checkOrThrowValidationError");
const handleError_1 = require("../errors/core/handleError");
exports.ticketController = {
    getClosestTicket: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const userId = req.user.id;
            const ticket = yield ticketService_1.ticketService.getClosestTicket(userId);
            res.status(200).json(ticket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getTickets: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const userId = req.user.id;
            if (data.status) {
                const status = data.status;
                const tickets = yield ticketService_1.ticketService.getTicketsByStatus(userId, status);
                res.status(200).json(tickets);
                return;
            }
            const tickets = yield ticketService_1.ticketService.getTickets(userId);
            res.status(200).json(tickets);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getTicketById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const ticketId = parseInt(data.ticketId);
            const ticket = yield ticketService_1.ticketService.getTicketById(ticketId);
            res.status(200).json(ticket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    createTicket: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const userId = req.user.id;
            const data = (0, express_validator_1.matchedData)(req);
            const scheduleId = parseInt(data.scheduleId);
            const ticket = yield ticketService_1.ticketService.createTicket(userId, scheduleId);
            res.status(201).json(ticket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    updateTicket: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const ticketId = parseInt(data.ticketId);
            if (data.status) {
                const status = data.status;
                const ticket = yield ticketService_1.ticketService.updateTicketStatus(ticketId, status);
                res.status(200).json(ticket);
                return;
            }
            else if (data.review) {
                const review = data.review;
                const ticket = yield ticketService_1.ticketService.updateReview(ticketId, review);
                res.status(200).json(ticket);
                return;
            }
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getTicketsDistance: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const userId = req.user.id;
            const icarId = req.icar.id;
            const icarPosition = req.icar.position;
            const distanceStatusList = yield ticketService_1.ticketService.getTicketsDistance(userId, icarId, icarPosition);
            res.status(200).json(distanceStatusList);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
};
