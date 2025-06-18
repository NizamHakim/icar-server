"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const ExpectedError_1 = require("./core/ExpectedError");
class NotFoundError extends ExpectedError_1.ExpectedError {
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
