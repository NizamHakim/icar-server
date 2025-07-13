import express from "express";
import { reviewController } from "../controllers/reviewController";
import { reviewMiddleware } from "../middlewares/reviewMiddleware";

const router = express.Router();

router.get(
	"/options",
	reviewMiddleware.validateGetReviewOptions,
	reviewController.getReviewOptions
);

export default router;
