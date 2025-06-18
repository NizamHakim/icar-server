import express from "express";
import { icarRouteController } from "../controllers/icarRouteController";
import { icarRouteMiddleware } from "../middlewares/icarRouteMiddleware";

const router = express.Router();

router.get("/", icarRouteController.getAllRoutes);

router.get(
	"/:icarRouteId",
	icarRouteMiddleware.validateGetRouteById,
	icarRouteController.getRouteById
);

export default router;
