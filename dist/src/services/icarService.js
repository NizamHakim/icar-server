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
exports.icarService = void 0;
const client_1 = require("@prisma/client");
const errorMessages_1 = require("../errors/core/errorMessages");
const icarRepository_1 = require("../repositories/icarRepository");
const ticketRepository_1 = require("../repositories/ticketRepository");
const NotFoundError_1 = require("../errors/NotFoundError");
exports.icarService = {
    // USE CASE
    getIcarsWithScheduleByStopId: (icarStopId) => __awaiter(void 0, void 0, void 0, function* () {
        const icarList = yield icarRepository_1.icarRepository.getIcarsWithScheduleByStopId(icarStopId);
        return icarList.filter((icar) => {
            return icar.schedules.length > 0;
        });
    }),
    connectIcar: (icarIdStr) => __awaiter(void 0, void 0, void 0, function* () {
        const icarId = parseInt(icarIdStr);
        if (isNaN(icarId)) {
            throw new Error(errorMessages_1.errorMessages.icar.invalidId);
        }
        yield icarRepository_1.icarRepository.updateIcarStatus(icarId, client_1.IcarStatus.ACTIVE);
    }),
    disconnectIcar: (icarId) => __awaiter(void 0, void 0, void 0, function* () {
        yield icarRepository_1.icarRepository.updateIcarStatus(icarId, client_1.IcarStatus.INACTIVE);
        yield ticketRepository_1.ticketRepository.cancelTicketsByIcarId(icarId);
        return yield icarRepository_1.icarRepository.getIcarById(icarId);
    }),
    // FALLBACK
    getIcars: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield icarRepository_1.icarRepository.getIcars();
    }),
    getIcarById: (icarId) => __awaiter(void 0, void 0, void 0, function* () {
        const icar = yield icarRepository_1.icarRepository.getIcarById(icarId);
        if (!icar) {
            throw new NotFoundError_1.NotFoundError(errorMessages_1.errorMessages.icar.notFound);
        }
        return icar;
    }),
};
