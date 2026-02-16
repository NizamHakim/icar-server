import express from "express";
import { scheduleController } from "../controllers/scheduleController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { scheduleMiddleware } from "../middlewares/scheduleMiddleware";

const router = express.Router();

router.get(
	"/",
	authMiddleware.validateToken,
	scheduleMiddleware.validateGetSchedules,
	scheduleController.getSchedules
);

export default router;
