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
exports.ticketService = void 0;
const luxon_1 = require("luxon");
const client_1 = require("@prisma/client");
const NotFoundError_1 = require("../errors/NotFoundError");
const scheduleRepository_1 = require("../repositories/scheduleRepository");
const ticketRepository_1 = require("../repositories/ticketRepository");
const errorMessages_1 = require("../errors/core/errorMessages");
const osrmRepository_1 = require("../repositories/osrmRepository");
const ticketDistanceStatus_1 = require("../types/ticketDistanceStatus");
exports.ticketService = {
    getTicketByStatus: (userId, status) => __awaiter(void 0, void 0, void 0, function* () {
        return yield ticketRepository_1.ticketRepository.getUserTicketByStatus(userId, status);
    }),
    getClosestUserTicket: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield ticketRepository_1.ticketRepository.getClosestUserTicket(userId);
    }),
    getTicketById: (ticketId) => __awaiter(void 0, void 0, void 0, function* () {
        const ticket = yield ticketRepository_1.ticketRepository.getTicketById(ticketId);
        if (!ticket) {
            throw new NotFoundError_1.NotFoundError(errorMessages_1.errorMessages.ticket.notFound);
        }
        return ticket;
    }),
    createTicket: (userId, scheduleId) => __awaiter(void 0, void 0, void 0, function* () {
        const schedule = yield scheduleRepository_1.scheduleRepository.getScheduleById(scheduleId);
        if (!schedule) {
            throw new NotFoundError_1.NotFoundError(errorMessages_1.errorMessages.schedule.notFound);
        }
        const expiredAt = luxon_1.DateTime.fromJSDate(schedule.arrivalTime).plus({
            minutes: 5,
        });
        const ticket = yield ticketRepository_1.ticketRepository.createTicket(userId, scheduleId, expiredAt.toJSDate());
        return ticket;
    }),
    cancelTicket: (ticketId) => __awaiter(void 0, void 0, void 0, function* () {
        const ticket = yield ticketRepository_1.ticketRepository.getTicketById(ticketId);
        if (!ticket) {
            throw new NotFoundError_1.NotFoundError(errorMessages_1.errorMessages.ticket.notFound);
        }
        return yield ticketRepository_1.ticketRepository.updateTicketStatus(ticketId, client_1.TicketStatus.CANCELED);
    }),
    finishTicket: (ticketId) => __awaiter(void 0, void 0, void 0, function* () {
        const ticket = yield ticketRepository_1.ticketRepository.getTicketById(ticketId);
        if (!ticket) {
            throw new NotFoundError_1.NotFoundError(errorMessages_1.errorMessages.ticket.notFound);
        }
        return yield ticketRepository_1.ticketRepository.updateTicketStatus(ticketId, client_1.TicketStatus.FINISHED);
    }),
    distanceStatus: (userId, icarId, icarPosition) => __awaiter(void 0, void 0, void 0, function* () {
        const tickets = yield ticketRepository_1.ticketRepository.getInqueueTicketsByIcarId(userId, icarId);
        const ticketsWithDistance = tickets.map((ticket) => __awaiter(void 0, void 0, void 0, function* () {
            const { distance } = yield osrmRepository_1.osrmRepository.getDistanceAndDuration(ticket.schedule.icarStop.coordinate, icarPosition);
            const distanceStatus = (0, ticketDistanceStatus_1.getTicketDistanceStatus)(distance);
            if (distanceStatus == ticketDistanceStatus_1.TicketDistanceStatus.ARRIVED) {
                ticketRepository_1.ticketRepository.updateTicketStatus(ticket.id, client_1.TicketStatus.FINISHED);
            }
            return {
                ticketId: ticket.id,
                distanceStatus: distanceStatus.toString(),
            };
        }));
        return yield Promise.all(ticketsWithDistance);
    }),
    getReviewAndSuggestionOptions: () => {
        return {
            reviewOptions: ticketRepository_1.ticketRepository.getReviewOptions(),
        };
    },
    updateReview: (ticketId, review) => __awaiter(void 0, void 0, void 0, function* () {
        return yield ticketRepository_1.ticketRepository.updateReview(ticketId, review);
    }),
};
