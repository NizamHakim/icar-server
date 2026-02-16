import express from "express";
import { icarStopController } from "../controllers/icarStopController";
import { icarStopMiddleware } from "../middlewares/icarStopMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get(
	"/",
	authMiddleware.validateToken,
	icarStopMiddleware.validateGetStops,
	icarStopController.getStops
);
router.get(
	"/:icarStopId",
	authMiddleware.validateToken,
	icarStopMiddleware.validateGetStopById,
	icarStopController.getStopById
);

export default router;
