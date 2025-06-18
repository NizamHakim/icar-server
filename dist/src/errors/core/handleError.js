"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const ExpectedError_1 = require("./ExpectedError");
const handleError = (error, res) => {
    console.error("Error occurred:", error);
    if (error instanceof ExpectedError_1.ExpectedError) {
        res
            .status(error.statusCode)
            .json({ error: error.message, body: error.body });
    }
    else {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};
exports.handleError = handleError;
