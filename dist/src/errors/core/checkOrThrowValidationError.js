"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOrThrowValidationError = void 0;
const UnprocessableEntityError_1 = require("../UnprocessableEntityError");
const express_validator_1 = require("express-validator");
const checkOrThrowValidationError = (req) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        const errorBody = result.array().reduce((acc, error) => {
            acc[error.path] = error.msg;
            return acc;
        }, {});
        throw new UnprocessableEntityError_1.UnprocessableEntityError("VALIDATION_ERROR", errorBody);
    }
};
exports.checkOrThrowValidationError = checkOrThrowValidationError;
