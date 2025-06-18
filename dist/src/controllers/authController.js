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
exports.authController = void 0;
const express_validator_1 = require("express-validator");
const authService_1 = require("../services/authService");
const handleError_1 = require("../errors/core/handleError");
const checkOrThrowValidationError_1 = require("../errors/core/checkOrThrowValidationError");
exports.authController = {
    getUserData: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const userId = req.user.id;
            const user = yield authService_1.authService.getUserData(userId);
            res.status(200).json(user);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const { email, password } = (0, express_validator_1.matchedData)(req);
            const user = yield authService_1.authService.login(email, password);
            res.status(200).json(user);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    signup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            (0, checkOrThrowValidationError_1.checkOrThrowValidationError)(req);
            const { name, email, password } = (0, express_validator_1.matchedData)(req);
            const newUser = yield authService_1.authService.signup(name, email, password);
            res.status(201).json(newUser);
        }
        catch (error) {
            (0, handleError_1.handleError)(error, res);
        }
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () { }),
};
