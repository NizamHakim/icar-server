"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpectedError = void 0;
class ExpectedError extends Error {
    constructor(message, statusCode, body) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.body = body;
    }
}
exports.ExpectedError = ExpectedError;
