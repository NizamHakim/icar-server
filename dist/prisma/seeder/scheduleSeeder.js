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
exports.scheduleSeeder = void 0;
const client_1 = require("@prisma/client");
const luxon_1 = require("luxon");
const BadGatewayError_1 = require("../../src/errors/BadGatewayError");
const prisma = new client_1.PrismaClient();
const scheduleSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    const startSession1 = luxon_1.DateTime.fromObject({ hour: 9, minute: 0 }, { zone: "Asia/Jakarta" });
    const endSession1 = luxon_1.DateTime.fromObject({ hour: 11, minute: 0 }, { zone: "Asia/Jakarta" });
    const startSession2 = luxon_1.DateTime.fromObject({ hour: 14, minute: 0 }, { zone: "Asia/Jakarta" });
    const endSession2 = luxon_1.DateTime.fromObject({ hour: 16, minute: 0 }, { zone: "Asia/Jakarta" });
    // icar 1 sesi 1
    const icar1 = yield prisma.icar.findFirst({
        where: {
            name: "iCar 1",
        },
    });
    const routeStopWaypoint1 = yield prisma.routeStopWaypoint.findMany({
        where: {
            icarRouteId: icar1.icarRouteId,
        },
        include: {
            icarStop: true,
        },
        orderBy: {
            order: "asc",
        },
    });
    yield generateSchedule(icar1.id, routeStopWaypoint1, client_1.ScheduleSession.SESSION_1, startSession1, endSession1, routeStopWaypoint1.length);
    // sesi 2 icar 1
    yield generateSchedule(icar1.id, routeStopWaypoint1, client_1.ScheduleSession.SESSION_2, startSession2, endSession2, routeStopWaypoint1.length);
    // icar 2 sesi 1
    const icar2 = yield prisma.icar.findFirst({
        where: {
            name: "iCar 2",
        },
    });
    const routeStopWaypoint2 = yield prisma.routeStopWaypoint.findMany({
        where: {
            icarRouteId: icar2.icarRouteId,
        },
        include: {
            icarStop: true,
        },
        orderBy: {
            order: "asc",
        },
    });
    yield generateSchedule(icar2.id, routeStopWaypoint2, client_1.ScheduleSession.SESSION_1, startSession1, endSession1, routeStopWaypoint2.length);
    yield generateSchedule(icar2.id, routeStopWaypoint2, client_1.ScheduleSession.SESSION_2, startSession2, endSession2, routeStopWaypoint2.length);
});
exports.scheduleSeeder = scheduleSeeder;
function generateSchedule(icarId, routeStopWaypoint, session, start, end, mod) {
    return __awaiter(this, void 0, void 0, function* () {
        let idx = 0;
        let current = start;
        while (current < end) {
            yield prisma.schedule.create({
                data: {
                    icarId: icarId,
                    icarStopId: routeStopWaypoint[idx % mod].icarStopId,
                    arrivalTime: current.toJSDate(),
                    session: session,
                },
            });
            const stopMinutes = 1;
            const response = yield fetch(`${process.env.OSRM_URL}/${routeStopWaypoint[idx % mod].icarStop.coordinate
                .longitude},${routeStopWaypoint[idx % mod].icarStop.coordinate
                .latitude};${routeStopWaypoint[(idx + 1) % mod].icarStop.coordinate
                .longitude},${routeStopWaypoint[(idx + 1) % mod].icarStop.coordinate
                .latitude}?geometries=geojson`);
            if (!response.ok) {
                throw new BadGatewayError_1.BadGatewayError(`Error fetching data from OSRM: ${response.statusText}`);
            }
            const data = yield response.json();
            current = current.plus({
                minutes: stopMinutes,
                seconds: Math.floor(data.routes[0].duration),
            });
            idx++;
        }
    });
}
