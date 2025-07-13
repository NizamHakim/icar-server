import express from "express";
import { icarStopController } from "../controllers/icarStopController";
import { icarStopMiddleware } from "../middlewares/icarStopMiddleware";

const router = express.Router();

router.get(
	"/",
	icarStopMiddleware.validateGetStops,
	icarStopController.getStops
);
router.get(
	"/:icarStopId",
	icarStopMiddleware.validateGetStopById,
	icarStopController.getStopById
);

export default router;
