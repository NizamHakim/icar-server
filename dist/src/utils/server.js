"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const icarStopRoutes_1 = __importDefault(require("../routes/icarStopRoutes"));
const icarRouteRoutes_1 = __importDefault(require("../routes/icarRouteRoutes"));
const ticketRoutes_1 = __importDefault(require("../routes/ticketRoutes"));
const scheduleRoutes_1 = __importDefault(require("../routes/scheduleRoutes"));
const icarRoutes_1 = __importDefault(require("../routes/icarRoutes"));
const authRoutes_1 = __importDefault(require("../routes/authRoutes"));
const websocket_1 = require("./websocket");
const schedule_cron_1 = require("./schedule_cron");
const createServer = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: "*",
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/api/icar-stops", icarStopRoutes_1.default);
    app.use("/api/icar-routes", icarRouteRoutes_1.default);
    app.use("/api/tickets", ticketRoutes_1.default);
    app.use("/api/schedules", scheduleRoutes_1.default);
    app.use("/api/icars", icarRoutes_1.default);
    app.use("/api/auth", authRoutes_1.default);
    const httpServer = (0, http_1.createServer)(app);
    (0, websocket_1.setupSocketIO)(httpServer);
    (0, schedule_cron_1.scheduleCron)();
    return httpServer;
};
exports.createServer = createServer;
