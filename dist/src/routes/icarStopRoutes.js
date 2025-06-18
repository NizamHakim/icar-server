"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const icarStopController_1 = require("../controllers/icarStopController");
const icarStopMiddleware_1 = require("../middlewares/icarStopMiddleware");
const router = express_1.default.Router();
router.get("/:userPosition", icarStopMiddleware_1.icarStopMiddleware.validateGetAllStops, icarStopController_1.icarStopController.getAllStops);
router.get("/:userPosition/:icarStopId", icarStopMiddleware_1.icarStopMiddleware.validateGetStopById, icarStopController_1.icarStopController.getStopById);
exports.default = router;
