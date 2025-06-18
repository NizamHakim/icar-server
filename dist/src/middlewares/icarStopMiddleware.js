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
exports.icarStopMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
exports.icarStopMiddleware = {
    validateGetAllStops: (0, express_validator_1.checkSchema)({
        userPosition: {
            custom: {
                bail: true,
                options: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
                    const userPosition = _parseUserPosition(value);
                    req.user = { position: userPosition };
                    return true;
                }),
                errorMessage: errorMessages_1.errorMessages.user.invalidPosition,
            },
        },
    }, ["params"]),
    validateGetStopById: (0, express_validator_1.checkSchema)({
        icarStopId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarStop.invalidId,
            },
        },
        userPosition: {
            custom: {
                bail: true,
                options: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
                    const userPosition = _parseUserPosition(value);
                    req.user = { position: userPosition };
                    return true;
                }),
                errorMessage: errorMessages_1.errorMessages.user.invalidPosition,
            },
        },
    }),
};
function _parseUserPosition(userPositionStr) {
    const [latitudeStr, longitudeStr] = userPositionStr.split(",");
    const latitude = parseFloat(latitudeStr);
    const longitude = parseFloat(longitudeStr);
    if (isNaN(latitude) || isNaN(longitude)) {
        throw new Error(errorMessages_1.errorMessages.user.invalidPosition);
    }
    return {
        latitude: latitude,
        longitude: longitude,
    };
}
