"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icarMiddleware = void 0;
const express_validator_1 = require("express-validator");
const errorMessages_1 = require("../errors/core/errorMessages");
exports.icarMiddleware = {
    validateGetIcarsWithScheduleByStopId: (0, express_validator_1.checkSchema)({
        icarStopId: {
            isInt: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.icarStop.invalidId,
            },
        },
    }, ["params"]),
    validateVerifyIcarId: (0, express_validator_1.checkSchema)({
        icarId: {
            notEmpty: {
                bail: true,
                errorMessage: "iCar ID is required",
            },
            isInt: {
                bail: true,
                errorMessage: "iCar ID is invalid",
            },
        },
    }, ["body"]),
};
