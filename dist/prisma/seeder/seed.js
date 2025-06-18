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
const icarStopSeeder_1 = require("./icarStopSeeder");
const icarSeeder_1 = require("./icarSeeder");
const icarRouteSeeder_1 = require("./icarRouteSeeder");
const scheduleSeeder_1 = require("./scheduleSeeder");
const userSeeder_1 = require("./userSeeder");
const routeStopWaypointSeeder_1 = require("./routeStopWaypointSeeder");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, userSeeder_1.userSeeder)();
        yield (0, icarRouteSeeder_1.icarRouteSeeder)();
        yield (0, icarStopSeeder_1.icarStopSeeder)();
        yield (0, routeStopWaypointSeeder_1.routeStopWaypointSeeder)();
        yield (0, icarSeeder_1.icarSeeder)();
        yield (0, scheduleSeeder_1.scheduleSeeder)();
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
