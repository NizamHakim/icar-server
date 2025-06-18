"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const express_validator_1 = require("express-validator");
const userRepository_1 = require("../repositories/userRepository");
const jwt_1 = require("../utils/jwt");
exports.authMiddleware = {
    validateToken: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
                    const decodedToken = jwt_1.jwtUtils.verifyToken(value);
                    if (!decodedToken.userId) {
                        throw new Error("INVALID_TOKEN");
                    }
                    req.user = { id: decodedToken.userId };
                    return true;
                }),
                errorMessage: "INVALID_TOKEN",
            },
        },
    }, ["headers"]),
    validateSignup: (0, express_validator_1.checkSchema)({
        name: {
            notEmpty: {
                bail: true,
                errorMessage: "NAME_REQUIRED",
            },
        },
        email: {
            notEmpty: {
                bail: true,
                errorMessage: "EMAIL_REQUIRED",
            },
            isEmail: {
                bail: true,
                errorMessage: "EMAIL_INVALID_FORMAT",
            },
            custom: {
                bail: true,
                options: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
                    const user = yield userRepository_1.userRepository.getUserByEmail(value);
                    if (user) {
                        throw new Error("EMAIL_ALREADY_REGISTERED");
                    }
                    return true;
                }),
                errorMessage: "EMAIL_ALREADY_REGISTERED",
            },
        },
        password: {
            notEmpty: {
                bail: true,
                errorMessage: "PASSWORD_REQUIRED",
            },
            isLength: {
                bail: true,
                options: { min: 8 },
                errorMessage: "PASSWORD_MIN_LENGTH",
            },
        },
        confirmPassword: {
            notEmpty: {
                bail: true,
                errorMessage: "CONFIRM_PASSWORD_REQUIRED",
            },
            custom: {
                bail: true,
                options: (value, { req }) => {
                    if (value !== req.body.password) {
                        throw new Error("CONFIRM_PASSWORD_MISMATCH");
                    }
                    return true;
                },
                errorMessage: "CONFIRM_PASSWORD_MISMATCH",
            },
        },
    }, ["body"]),
    validateLogin: (0, express_validator_1.checkSchema)({
        email: {
            notEmpty: {
                bail: true,
                errorMessage: "EMAIL_REQUIRED",
            },
            isEmail: {
                bail: true,
                errorMessage: "EMAIL_INVALID_FORMAT",
            },
        },
        password: {
            notEmpty: {
                bail: true,
                errorMessage: "PASSWORD_REQUIRED",
            },
        },
    }, ["body"]),
};
