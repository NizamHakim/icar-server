"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icarRouteMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
exports.icarRouteMiddleware = {
    validateGetRouteById: (0, express_validator_1.checkSchema)({
        icarRouteId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarRoute.invalidId,
            },
        },
    }),
};
