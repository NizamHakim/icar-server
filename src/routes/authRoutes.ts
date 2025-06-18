import express from "express";
import { authController } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware.validateToken, authController.getUserData);
router.post("/login", authMiddleware.validateLogin, authController.login);
router.post("/signup", authMiddleware.validateSignup, authController.signup);

export default router;
