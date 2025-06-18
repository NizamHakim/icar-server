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
exports.routeStopWaypointSeeder = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const routeStopWaypointSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    const gerbangITS = yield prisma.icarStop.findUnique({
        where: { name: "Gerbang ITS" },
    });
    const teknikLingkungan = yield prisma.icarStop.findUnique({
        where: { name: "Teknik Lingkungan ITS" },
    });
    const rektoratITS = yield prisma.icarStop.findUnique({
        where: { name: "Rektorat ITS" },
    });
    const kantinPusat = yield prisma.icarStop.findUnique({
        where: { name: "Kantin Pusat ITS" },
    });
    const asramaITS = yield prisma.icarStop.findUnique({
        where: { name: "Asrama ITS" },
    });
    const masjidManarulIlmi = yield prisma.icarStop.findUnique({
        where: { name: "Masjid Manarul Ilmi" },
    });
    const tower2 = yield prisma.icarStop.findUnique({
        where: { name: "Tower 2" },
    });
    const perumdosBlokUBarat = yield prisma.icarStop.findUnique({
        where: { name: "Perumdos Blok U Barat" },
    });
    const gedungRiset = yield prisma.icarStop.findUnique({
        where: { name: "Gedung Riset" },
    });
    const gedungPusatRobotikaITS = yield prisma.icarStop.findUnique({
        where: { name: "Gedung Pusat Robotika ITS" },
    });
    const perumdosBlokUTimur = yield prisma.icarStop.findUnique({
        where: { name: "Perumdos Blok U Timur" },
    });
    const danau8 = yield prisma.icarStop.findUnique({
        where: { name: "Danau 8" },
    });
    const bunderanAsrama = yield prisma.icarRoute.findUnique({
        where: { name: "Bunderan ITS - Asrama ITS" },
    });
    yield prisma.routeStopWaypoint.createMany({
        data: [
            {
                icarRouteId: bunderanAsrama.id,
                icarStopId: gerbangITS.id,
                order: 1,
            },
            {
                icarRouteId: bunderanAsrama.id,
                icarStopId: teknikLingkungan.id,
                order: 2,
            },
            {
                icarRouteId: bunderanAsrama.id,
                icarStopId: rektoratITS.id,
                order: 3,
            },
            {
                icarRouteId: bunderanAsrama.id,
                icarStopId: kantinPusat.id,
                order: 4,
            },
            {
                icarRouteId: bunderanAsrama.id,
                icarStopId: asramaITS.id,
                order: 5,
            },
            {
                icarRouteId: bunderanAsrama.id,
                icarStopId: masjidManarulIlmi.id,
                order: 6,
            },
        ],
    });
    const kantinRobotika = yield prisma.icarRoute.findUnique({
        where: { name: "Kantin ITS - Robotika" },
    });
    yield prisma.routeStopWaypoint.createMany({
        data: [
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: kantinPusat.id,
                order: 1,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: tower2.id,
                order: 2,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: perumdosBlokUBarat.id,
                order: 3,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: gedungRiset.id,
                order: 4,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: gedungPusatRobotikaITS.id,
                order: 5,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: perumdosBlokUTimur.id,
                order: 6,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: danau8.id,
                order: 7,
            },
            {
                icarRouteId: kantinRobotika.id,
                icarStopId: masjidManarulIlmi.id,
                order: 8,
            },
        ],
    });
});
exports.routeStopWaypointSeeder = routeStopWaypointSeeder;
