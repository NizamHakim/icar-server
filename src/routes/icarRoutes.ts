import express from "express";
import { icarController } from "../controllers/icarController";
import { icarMiddleware } from "../middlewares/icarMiddleware";
import { icarRouteMiddleware } from "../middlewares/icarRouteMiddleware";

const router = express.Router();

router.get(
	"/icar-stop/:icarStopId",
	icarMiddleware.validateGetIcarsWithScheduleByStopId,
	icarController.getIcarsWithScheduleByStopId
);

router.post(
	"/verify-icar",
	icarMiddleware.validateVerifyIcarId,
	icarController.verifyIcarId
);

export default router;
