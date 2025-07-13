"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
const validateAuthToken_1 = require("./customValidators/validateAuthToken");
const validateTicket_1 = require("./customValidators/validateTicket");
const validateIcar_1 = require("./customValidators/validateIcar");
exports.ticketMiddleware = {
    validateGetClosestTicket: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
    }),
    validateGetTickets: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        status: {
            optional: true,
            custom: {
                bail: true,
                options: validateTicket_1.validateTicket.validStatus,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidStatus,
            },
        },
    }),
    validateGetTicketById: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        ticketId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidId,
            },
        },
    }),
    validateCreateTicket: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        scheduleId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.schedule.invalidId,
            },
        },
    }),
    validateUpdateTicket: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        ticketId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidId,
            },
        },
        status: {
            optional: true,
            custom: {
                bail: true,
                options: validateTicket_1.validateTicket.validStatus,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidStatus,
            },
        },
        review: {
            optional: true,
            custom: {
                bail: true,
                options: validateTicket_1.validateTicket.validReview,
                errorMessage: errorMessages_1.errorMessages.ticket.invalidReview,
            },
        },
    }),
    validateGetTicketsDistance: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        "x-icar": {
            custom: {
                bail: true,
                options: validateIcar_1.validateIcar,
                errorMessage: errorMessages_1.errorMessages.icar.invalidId,
            },
        },
    }),
};
