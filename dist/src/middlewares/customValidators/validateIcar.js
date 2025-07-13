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
exports.validateIcar = validateIcar;
const coordinate_1 = require("../../types/coordinate");
function validateIcar(value_1, _a) {
    return __awaiter(this, arguments, void 0, function* (value, { req }) {
        const icar = typeof value === "string" ? JSON.parse(value) : value;
        const icarId = parseInt(icar.id);
        if (isNaN(icarId)) {
            throw new Error();
        }
        const icarPosition = (0, coordinate_1.parseCoordinate)(icar.position);
        req.icar = { id: icarId, position: icarPosition };
        return true;
    });
}
