import express from "express";
import { icarRouteController } from "../controllers/icarRouteController";
import { icarRouteMiddleware } from "../middlewares/icarRouteMiddleware";

const router = express.Router();

router.get(
	"/",
	icarRouteMiddleware.validateGetRoutes,
	icarRouteController.getRoutes
);

router.get(
	"/:icarRouteId",
	icarRouteMiddleware.validateGetRouteById,
	icarRouteController.getRouteById
);

export default router;
