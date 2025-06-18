import express from "express";
import { scheduleController } from "../controllers/scheduleController";
import { scheduleMiddleware } from "../middlewares/scheduleMiddleware";

const router = express.Router();

router.get(
	"/icar-stop/:icarStopId/icar-route/:icarRouteId",
	scheduleMiddleware.validateGetScheduleListByStopAndRoute,
	scheduleController.getScheduleListByStopAndRoute
);

export default router;
