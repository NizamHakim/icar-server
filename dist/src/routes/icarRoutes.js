"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const icarController_1 = require("../controllers/icarController");
const icarMiddleware_1 = require("../middlewares/icarMiddleware");
const router = express_1.default.Router();
router.get("/icar-stop/:icarStopId", icarMiddleware_1.icarMiddleware.validateGetIcarsWithScheduleByStopId, icarController_1.icarController.getIcarsWithScheduleByStopId);
router.post("/verify-icar", icarMiddleware_1.icarMiddleware.validateVerifyIcarId, icarController_1.icarController.verifyIcarId);
exports.default = router;
