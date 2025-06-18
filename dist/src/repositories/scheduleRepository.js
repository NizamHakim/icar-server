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
exports.scheduleRepository = void 0;
const luxon_1 = require("luxon");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.scheduleRepository = {
    getScheduleListByStopAndRoute: (icarStopId, icarRouteId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.schedule.findMany({
            where: {
                icarStopId: icarStopId,
                icar: {
                    status: client_1.IcarStatus.ACTIVE,
                    icarRouteId: icarRouteId,
                },
                arrivalTime: {
                    gte: luxon_1.DateTime.now().toJSDate(),
                },
            },
            include: {
                icar: true,
                tickets: {
                    where: {
                        status: client_1.TicketStatus.IN_QUEUE,
                    },
                },
            },
            orderBy: {
                arrivalTime: "asc",
            },
        });
    }),
    getScheduleById: (scheduleId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.schedule.findUnique({
            where: {
                id: scheduleId,
            },
        });
    }),
};
