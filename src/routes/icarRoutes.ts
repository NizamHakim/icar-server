import express from "express";
import { icarController } from "../controllers/icarController";
import { icarMiddleware } from "../middlewares/icarMiddleware";

const router = express.Router();

router.get("/", icarMiddleware.validateGetIcars, icarController.getIcars);

router.get(
	"/:icarId",
	icarMiddleware.validateGetIcarById,
	icarController.getIcarById
);

export default router;
