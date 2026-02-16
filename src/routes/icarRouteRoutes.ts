import express from "express";
import { icarRouteController } from "../controllers/icarRouteController";
import { icarRouteMiddleware } from "../middlewares/icarRouteMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get(
	"/",
	authMiddleware.validateToken,
	icarRouteMiddleware.validateGetRoutes,
	icarRouteController.getRoutes
);

router.get(
	"/:icarRouteId",
	authMiddleware.validateToken,
	icarRouteMiddleware.validateGetRouteById,
	icarRouteController.getRouteById
);

export default router;
