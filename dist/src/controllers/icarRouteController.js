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
exports.icarRouteController = void 0;
const icarRouteService_1 = require("../services/icarRouteService");
const handleError_1 = require("../errors/core/handleError");
const express_validator_1 = require("express-validator");
const checkOrThrowValidationError_1 = require("../errors/core/checkOrThrowValidationError");
exports.icarRouteController = {
    getAllRoutes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const routes = yield icarRouteService_1.icarRouteService.getAllRoutes();
            res.status(200).json(routes);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    getRouteById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const data = (0, express_validator_1.matchedData)(req);
            const icarRouteId = parseInt(data.icarRouteId);
            const route = yield icarRouteService_1.icarRouteService.getRouteById(icarRouteId);
            res.status(200).json(route);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
};
