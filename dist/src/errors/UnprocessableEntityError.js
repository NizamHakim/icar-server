"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityError = void 0;
const ExpectedError_1 = require("./core/ExpectedError");
class UnprocessableEntityError extends ExpectedError_1.ExpectedError {
    constructor(message, body) {
        super(message, 422);
        this.body = body;
    }
}
exports.UnprocessableEntityError = UnprocessableEntityError;
