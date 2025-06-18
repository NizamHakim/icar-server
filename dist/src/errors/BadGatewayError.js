"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadGatewayError = void 0;
const ExpectedError_1 = require("./core/ExpectedError");
class BadGatewayError extends ExpectedError_1.ExpectedError {
    constructor(message) {
        super(message, 502);
    }
}
exports.BadGatewayError = BadGatewayError;
