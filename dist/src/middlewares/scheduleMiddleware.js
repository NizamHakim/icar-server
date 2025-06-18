"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
exports.scheduleMiddleware = {
    validateGetScheduleListByStopAndRoute: (0, express_validator_1.checkSchema)({
        icarStopId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarStop.invalidId,
            },
        },
        icarRouteId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarRoute.invalidId,
            },
        },
    }, ["params"]),
};
