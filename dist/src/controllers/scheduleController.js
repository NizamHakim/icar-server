"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleController = void 0;
const scheduleService_1 = require("../services/scheduleService");
const handleError_1 = require("../errors/core/handleError");
const checkOrThrowValidationError_1 = require("../errors/core/checkOrThrowValidationError");
const express_validator_1 = require("express-validator");
exports.scheduleController = {
    getSchedules: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            if (data.icarStopId && data.icarRouteId) {
                const icarStopId = parseInt(data.icarStopId);
                const icarRouteId = parseInt(data.icarRouteId);
                const schedules = yield scheduleService_1.scheduleService.getSchedulesByStopAndRoute(icarStopId, icarRouteId);
                res.status(200).json(schedules);
                return;
            }
            const schedules = yield scheduleService_1.scheduleService.getSchedules();
            res.status(200).json(schedules);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
};
