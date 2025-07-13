"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
const validateAuthToken_1 = require("./customValidators/validateAuthToken");
exports.scheduleMiddleware = {
    validateGetSchedules: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
        icarStopId: {
            optional: true,
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarStop.invalidId,
            },
        },
        icarRouteId: {
            optional: true,
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarRoute.invalidId,
            },
        },
    }),
};
