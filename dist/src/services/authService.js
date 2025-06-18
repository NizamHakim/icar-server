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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRepository_1 = require("../repositories/userRepository");
const UnauthorizedError_1 = require("../errors/UnauthorizedError");
const jwt_1 = require("../utils/jwt");
const errorMessages_1 = require("../errors/core/errorMessages");
const UnprocessableEntityError_1 = require("../errors/UnprocessableEntityError");
const SALT_ROUNDS = 10;
exports.authService = {
    getUserData: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userRepository_1.userRepository.getUserById(userId);
        if (!user) {
            throw new UnauthorizedError_1.UnauthorizedError(errorMessages_1.errorMessages.auth.userNotFound);
        }
        return user;
    }),
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userRepository_1.userRepository.getUserByEmail(email);
        if (!user) {
            throw new UnprocessableEntityError_1.UnprocessableEntityError("VALIDATION_ERROR", {
                email: errorMessages_1.errorMessages.auth.emailPasswordCombinationInvalid,
                password: errorMessages_1.errorMessages.auth.emailPasswordCombinationInvalid,
            });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnprocessableEntityError_1.UnprocessableEntityError("VALIDATION_ERROR", {
                password: errorMessages_1.errorMessages.auth.emailPasswordCombinationInvalid,
                email: errorMessages_1.errorMessages.auth.emailPasswordCombinationInvalid,
            });
        }
        return {
            user: user,
            token: jwt_1.jwtUtils.signToken(user),
        };
    }),
    signup: (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        const newUser = yield userRepository_1.userRepository.createNewUser(name, email, hashedPassword);
        return {
            user: newUser,
            token: jwt_1.jwtUtils.signToken(newUser),
        };
    }),
    logout: () => { },
};
