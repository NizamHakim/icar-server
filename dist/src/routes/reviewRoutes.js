"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewController_1 = require("../controllers/reviewController");
const reviewMiddleware_1 = require("../middlewares/reviewMiddleware");
const router = express_1.default.Router();
router.get("/options", reviewMiddleware_1.reviewMiddleware.validateGetReviewOptions, reviewController_1.reviewController.getReviewOptions);
exports.default = router;
