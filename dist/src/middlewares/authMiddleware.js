"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const express_validator_1 = require("express-validator");
const validateAuthToken_1 = require("./customValidators/validateAuthToken");
const errorMessages_1 = require("../errors/core/errorMessages");
const validateEmail_1 = require("./customValidators/validateEmail");
const validatePassword_1 = require("./customValidators/validatePassword");
exports.authMiddleware = {
    validateToken: (0, express_validator_1.checkSchema)({
        "x-auth-token": {
            custom: {
                bail: true,
                options: validateAuthToken_1.validateAuthToken,
                errorMessage: errorMessages_1.errorMessages.auth.invalidToken,
            },
        },
    }),
    validateSignup: (0, express_validator_1.checkSchema)({
        name: {
            notEmpty: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.nameRequired,
            },
        },
        email: {
            notEmpty: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.emailRequired,
            },
            isEmail: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.emailInvalidFormat,
            },
            custom: {
                bail: true,
                options: validateEmail_1.validateEmail.alreadyRegistered,
                errorMessage: errorMessages_1.errorMessages.auth.emailAlreadyRegistered,
            },
        },
        password: {
            notEmpty: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.passwordRequired,
            },
            isLength: {
                bail: true,
                options: { min: 8 },
                errorMessage: errorMessages_1.errorMessages.auth.passwordMinLength,
            },
        },
        confirmPassword: {
            notEmpty: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.confirmPasswordRequired,
            },
            custom: {
                bail: true,
                options: validatePassword_1.validatePassword.confirmPasswordMismatch,
                errorMessage: errorMessages_1.errorMessages.auth.confirmPasswordMismatch,
            },
        },
    }),
    validateLogin: (0, express_validator_1.checkSchema)({
        email: {
            notEmpty: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.emailRequired,
            },
            isEmail: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.emailInvalidFormat,
            },
        },
        password: {
            notEmpty: {
                bail: true,
                errorMessage: errorMessages_1.errorMessages.auth.passwordRequired,
            },
        },
    }),
};
