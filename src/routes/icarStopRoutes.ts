import express from "express";
import { icarStopController } from "../controllers/icarStopController";
import { icarStopMiddleware } from "../middlewares/icarStopMiddleware";

const router = express.Router();

router.get(
	"/:userPosition",
	icarStopMiddleware.validateGetAllStops,
	icarStopController.getAllStops
);
router.get(
	"/:userPosition/:icarStopId",
	icarStopMiddleware.validateGetStopById,
	icarStopController.getStopById
);

export default router;
