"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icarStopMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
const validateUserPosition_1 = require("./customValidators/validateUserPosition");
const validateAuthToken_1 = require("./customValidators/validateAuthToken");
exports.icarStopMiddleware = {
    validateGetStops: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        "x-user-position": {
            custom: {
                bail: true,
                options: validateUserPosition_1.validateUserPosition,
                errorMessage: errorMessages_1.errorMessages.user.invalidPosition,
            },
        },
    }),
    validateGetStopById: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        "x-user-position": {
            custom: {
                bail: true,
                options: validateUserPosition_1.validateUserPosition,
                errorMessage: errorMessages_1.errorMessages.user.invalidPosition,
            },
        },
        icarStopId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarStop.invalidId,
            },
        },
    }),
};
