"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icarRouteMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
const validateAuthToken_1 = require("./customValidators/validateAuthToken");
exports.icarRouteMiddleware = {
    validateGetRoutes: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        polyline: {
            optional: true,
            isBoolean: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarRoute.invalidPolyline,
            },
        },
    }),
    validateGetRouteById: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        icarRouteId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarRoute.invalidId,
            },
        },
    }),
};
