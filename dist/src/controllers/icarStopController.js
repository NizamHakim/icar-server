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
exports.icarStopController = void 0;
const icarStopService_1 = require("../services/icarStopService");
const handleError_1 = require("../errors/core/handleError");
const checkOrThrowValidationError_1 = require("../errors/core/checkOrThrowValidationError");
const express_validator_1 = require("express-validator");
exports.icarStopController = {
    getAllStops: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const userPosition = req.user.position;
            const icarStops = yield icarStopService_1.icarStopService.getAllStops(userPosition);
            res.status(200).json(icarStops);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getStopById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const icarStopId = parseInt(data.icarStopId);
            const userPosition = req.user.position;
            const icarStop = yield icarStopService_1.icarStopService.getStopById(icarStopId, userPosition);
            res.status(200).json(icarStop);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
};
