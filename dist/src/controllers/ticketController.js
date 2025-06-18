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
    getTicketByStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const userId = parseInt(data.userId);
            const status = data.status;
            const tickets = yield ticketService_1.ticketService.getTicketByStatus(userId, status);
            res.status(200).json(tickets);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getClosestUserTicket: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const userId = parseInt(data.userId);
            const ticket = yield ticketService_1.ticketService.getClosestUserTicket(userId);
            res.status(200).json(ticket);
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
            const data = (0, express_validator_1.matchedData)(req);
            const userId = parseInt(data.userId);
            const scheduleId = parseInt(data.scheduleId);
            const ticket = yield ticketService_1.ticketService.createTicket(userId, scheduleId);
            res.status(201).json(ticket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    cancelTicket: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const ticketId = parseInt(data.ticketId);
            const updatedTicket = yield ticketService_1.ticketService.cancelTicket(ticketId);
            res.status(200).json(updatedTicket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    finishTicket: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const ticketId = parseInt(data.ticketId);
            const updatedTicket = yield ticketService_1.ticketService.finishTicket(ticketId);
            res.status(200).json(updatedTicket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    distanceStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const userId = parseInt(data.userId);
            const icarId = parseInt(data.icarId);
            const position = req.icar.position;
            const distanceStatusList = yield ticketService_1.ticketService.distanceStatus(userId, icarId, position);
            res.status(200).json(distanceStatusList);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getReviewAndSuggestionOptions: (req, res) => {
        try {
            const reviewOptions = ticketService_1.ticketService.getReviewAndSuggestionOptions();
            res.status(200).json(reviewOptions);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    },
    updateReview: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const ticketId = parseInt(data.ticketId);
            const review = req.body;
            const updatedTicket = yield ticketService_1.ticketService.updateReview(ticketId, review);
            res.status(200).json(updatedTicket);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
};
