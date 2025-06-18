"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const icarRouteController_1 = require("../controllers/icarRouteController");
const icarRouteMiddleware_1 = require("../middlewares/icarRouteMiddleware");
const router = express_1.default.Router();
router.get("/", icarRouteController_1.icarRouteController.getAllRoutes);
router.get("/:icarRouteId", icarRouteMiddleware_1.icarRouteMiddleware.validateGetRouteById, icarRouteController_1.icarRouteController.getRouteById);
exports.default = router;
