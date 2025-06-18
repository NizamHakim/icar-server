"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scheduleController_1 = require("../controllers/scheduleController");
const scheduleMiddleware_1 = require("../middlewares/scheduleMiddleware");
const router = express_1.default.Router();
router.get("/icar-stop/:icarStopId/icar-route/:icarRouteId", scheduleMiddleware_1.scheduleMiddleware.validateGetScheduleListByStopAndRoute, scheduleController_1.scheduleController.getScheduleListByStopAndRoute);
exports.default = router;
