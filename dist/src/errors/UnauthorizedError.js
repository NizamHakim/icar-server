"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const ExpectedError_1 = require("./core/ExpectedError");
class UnauthorizedError extends ExpectedError_1.ExpectedError {
    constructor(message) {
        super(message, 401);
    }
}
exports.UnauthorizedError = UnauthorizedError;
