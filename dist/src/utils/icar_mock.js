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
const client_1 = require("@prisma/client");
const ws_1 = require("ws");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const icars = yield prisma.icar.findMany({
            include: {
                icarRoute: {
                    include: {
                        routeStopWaypoints: {
                            include: {
                                icarStop: true,
                            },
                        },
                    },
                },
            },
        });
        icars.forEach((icar) => {
            const ws = new ws_1.WebSocket("ws://localhost:5000", {
                headers: {
                    "icar-id": icar.id.toString(),
                    "client-type": "icar",
                },
            });
            ws.on("open", () => {
                periodicallySendLocation(ws, icar);
            });
        });
    });
}
function periodicallySendLocation(ws, icar) {
    let index = 0;
    const waypoints = icar.icarRoute.routeStopWaypoints;
    const totalWaypoints = waypoints.length;
    const intervalId = setInterval(() => {
        if (ws.readyState !== ws_1.WebSocket.OPEN) {
            clearInterval(intervalId);
            return;
        }
        if (index >= totalWaypoints) {
            index = 0;
        }
        const currentWaypoint = waypoints[index];
        const currentStop = currentWaypoint.icarStop;
        const message = {
            icarId: icar.id,
            position: currentStop.coordinate,
        };
        ws.send(JSON.stringify(message));
        console.log(`Icar ${icar.id} at stop ${currentStop.name}`);
        index++;
    }, 5000);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
