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
exports.validateTicket = void 0;
const client_1 = require("@prisma/client");
const review_1 = require("../../types/review");
exports.validateTicket = {
    validStatus: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
        const validStatuses = Object.values(client_1.TicketStatus);
        if (!validStatuses.includes(value)) {
            throw new Error();
        }
        return true;
    }),
    validReview: (value_1, _a) => __awaiter(void 0, [value_1, _a], void 0, function* (value, { req }) {
        const review = (0, review_1.parseReview)(value);
        return true;
    }),
};
