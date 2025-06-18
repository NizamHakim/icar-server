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
exports.ticketMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
const client_1 = require("@prisma/client");
exports.ticketMiddleware = {
    validateGetTicketByStatus: (0, express_validator_1.checkSchema)({
        userId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.user.invalidId,
            },
        },
        status: {
            custom: {
                bail: true,
                options: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
                    const validStatuses = Object.values(client_1.TicketStatus);
                    if (!validStatuses.includes(value)) {
                        throw new Error(errorMessages_1.errorMessages.ticket.invalidStatus);
                    }
                    return true;
                }),
                errorMessage: errorMessages_1.errorMessages.ticket.invalidStatus,
            },
        },
    }, ["params"]),
    validateGetClosestUserTicket: (0, express_validator_1.checkSchema)({
        userId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.user.invalidId,
            },
        },
    }, ["params"]),
    validateGetTicketById: (0, express_validator_1.checkSchema)({
        ticketId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidId,
            },
        },
    }, ["params"]),
    validateCreateTicket: (0, express_validator_1.checkSchema)({
        userId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.user.invalidId,
            },
        },
        scheduleId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.schedule.invalidId,
            },
        },
    }, ["body"]),
    validateCancelTicket: (0, express_validator_1.checkSchema)({
        ticketId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidId,
            },
        },
    }, ["params"]),
    validateFinishTicket: (0, express_validator_1.checkSchema)({
        ticketId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidId,
            },
        },
    }, ["params"]),
    validateDistanceStatus: (0, express_validator_1.checkSchema)({
        userId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.user.invalidId,
            },
        },
        icarId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icar.invalidId,
            },
        },
        position: {
            custom: {
                bail: true,
                options: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
                    const icarPosition = value;
                    req.icar = { position: icarPosition };
                    return true;
                }),
                errorMessage: errorMessages_1.errorMessages.icar.invalidPosition,
            },
        },
    }, ["body"]),
    validateUpdateReview: (0, express_validator_1.checkSchema)({
        ticketId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidId,
            },
        },
    }, ["params"]),
};
