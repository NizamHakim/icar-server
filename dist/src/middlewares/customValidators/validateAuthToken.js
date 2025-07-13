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
exports.validateAuthToken = validateAuthToken;
const jwt_1 = require("../../utils/jwt");
function validateAuthToken(value_1, _a) {
    return __awaiter(this, arguments, void 0, function* (value, { req }) {
        const decodedToken = jwt_1.jwtUtils.verifyToken(value);
        if (!decodedToken.userId) {
            throw new Error();
        }
        req.user = Object.assign(Object.assign({}, req.user), { id: decodedToken.userId });
        return true;
    });
}
