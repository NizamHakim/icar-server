import express from "express";
import { scheduleController } from "../controllers/scheduleController";
import { scheduleMiddleware } from "../middlewares/scheduleMiddleware";

const router = express.Router();

router.get(
	"/",
	scheduleMiddleware.validateGetSchedules,
	scheduleController.getSchedules
);

export default router;
