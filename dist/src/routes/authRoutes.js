"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.get("/", authMiddleware_1.authMiddleware.validateToken, authController_1.authController.getUserData);
router.post("/login", authMiddleware_1.authMiddleware.validateLogin, authController_1.authController.login);
router.post("/signup", authMiddleware_1.authMiddleware.validateSignup, authController_1.authController.signup);
exports.default = router;
