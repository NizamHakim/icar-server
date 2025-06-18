"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtUtils = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
exports.jwtUtils = {
    signToken: (user) => {
        if (!JWT_SECRET)
            throw new Error("JWT_SECRET is not defined");
        return jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, JWT_SECRET);
    },
    verifyToken: (token) => {
        if (!JWT_SECRET)
            throw new Error("JWT_SECRET is not defined");
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    },
};
