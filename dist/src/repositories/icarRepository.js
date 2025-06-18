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
exports.icarRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.icarRepository = {
    getIcarsWithScheduleByStopId: (icarStopId) => __awaiter(void 0, void 0, void 0, function* () {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
        return yield prisma.icar.findMany({
            include: {
                icarRoute: true,
                schedules: {
                    where: {
                        icarStopId: icarStopId,
                        arrivalTime: {
                            gte: startOfDay,
                            lte: endOfDay,
                        },
                    },
                },
            },
        });
    }),
    getIcarById: (icarId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.icar.findUnique({
            where: { id: icarId },
        });
    }),
    updateIcarStatus: (icarId, status) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.icar.update({
            where: { id: icarId },
            data: { status: status },
        });
    }),
};
