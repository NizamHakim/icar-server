import express from "express";
import cors from "cors";
import { createServer as createHttpServer } from "http";

import icarStopRoutes from "../routes/icarStopRoutes";
import icarRouteRoutes from "../routes/icarRouteRoutes";
import ticketRoutes from "../routes/ticketRoutes";
import scheduleRoutes from "../routes/scheduleRoutes";
import icarRoutes from "../routes/icarRoutes";
import authRoutes from "../routes/authRoutes";
import { setupSocketIO } from "./websocket";
import { scheduleCron } from "./schedule_cron";

export const createServer = () => {
	const app = express();

	app.use(
		cors({
			origin: "*",
		})
	);
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use("/api/icar-stops", icarStopRoutes);
	app.use("/api/icar-routes", icarRouteRoutes);
	app.use("/api/tickets", ticketRoutes);
	app.use("/api/schedules", scheduleRoutes);
	app.use("/api/icars", icarRoutes);
	app.use("/api/auth", authRoutes);

	const httpServer = createHttpServer(app);
	setupSocketIO(httpServer);
	scheduleCron();

	return httpServer;
};
