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
exports.ticketRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.ticketRepository = {
    getClosestTicket: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.findFirst({
            where: {
                userId: userId,
                status: client_1.TicketStatus.IN_QUEUE,
            },
            include: {
                schedule: {
                    include: {
                        icarStop: true,
                        icar: {
                            include: {
                                icarRoute: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                schedule: {
                    arrivalTime: "asc",
                },
            },
        });
    }),
    getTicketsByStatus: (userId, status) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.findMany({
            where: {
                userId: userId,
                status: status,
            },
            include: {
                schedule: {
                    include: {
                        icarStop: true,
                        icar: {
                            include: {
                                icarRoute: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                schedule: {
                    arrivalTime: "desc",
                },
            },
        });
    }),
    getTicketById: (ticketId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.findUnique({
            where: {
                id: ticketId,
            },
            include: {
                schedule: {
                    include: {
                        icarStop: true,
                        icar: {
                            include: {
                                icarRoute: true,
                            },
                        },
                        tickets: {
                            where: {
                                status: client_1.TicketStatus.IN_QUEUE,
                            },
                        },
                    },
                },
            },
        });
    }),
    createTicket: (userId, scheduleId, expiredAt) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.create({
            data: {
                userId: userId,
                scheduleId: scheduleId,
                status: client_1.TicketStatus.IN_QUEUE,
                expiredAt: expiredAt,
            },
        });
    }),
    updateTicketStatus: (ticketId, ticketStatus) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.update({
            where: {
                id: ticketId,
            },
            data: {
                status: ticketStatus,
            },
        });
    }),
    updateReview: (ticketId, review) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.update({
            where: {
                id: ticketId,
            },
            data: {
                review: review,
            },
        });
    }),
    getTicketsByIcarId: (status, userId, icarId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.findMany({
            where: {
                userId: userId,
                status: status,
                schedule: {
                    icarId: icarId,
                },
            },
            include: {
                schedule: {
                    include: {
                        icarStop: true,
                    },
                },
            },
        });
    }),
    cancelTicketsByIcarId: (icarId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.updateMany({
            where: {
                schedule: {
                    icarId: icarId,
                },
                status: client_1.TicketStatus.IN_QUEUE,
            },
            data: {
                status: client_1.TicketStatus.CANCELED,
            },
        });
    }),
    // FALLBACK
    getTickets: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.ticket.findMany({
            where: {
                userId: userId,
            },
        });
    }),
};
