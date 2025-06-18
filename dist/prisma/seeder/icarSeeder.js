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
exports.icarSeeder = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const icarSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    const bunderanAsrama = yield prisma.icarRoute.findUnique({
        where: { name: "Bunderan ITS - Asrama ITS" },
    });
    const gerbangITS = yield prisma.icarStop.findUnique({
        where: { name: "Gerbang ITS" },
    });
    const kantinRobotika = yield prisma.icarRoute.findUnique({
        where: { name: "Kantin ITS - Robotika" },
    });
    const kantinPusat = yield prisma.icarStop.findUnique({
        where: { name: "Kantin Pusat ITS" },
    });
    yield prisma.icar.createMany({
        data: [
            {
                name: "iCar 1",
                capacity: 6,
                status: client_1.IcarStatus.ACTIVE,
                icarRouteId: bunderanAsrama.id,
            },
            {
                name: "iCar 2",
                capacity: 6,
                status: client_1.IcarStatus.ACTIVE,
                icarRouteId: kantinRobotika.id,
            },
        ],
    });
});
exports.icarSeeder = icarSeeder;
