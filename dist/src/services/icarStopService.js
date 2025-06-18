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
exports.icarStopService = void 0;
const errorMessages_1 = require("../errors/core/errorMessages");
const NotFoundError_1 = require("../errors/NotFoundError");
const icarStopRepository_1 = require("../repositories/icarStopRepository");
const osrmRepository_1 = require("../repositories/osrmRepository");
exports.icarStopService = {
    getAllStops: (userPosition) => __awaiter(void 0, void 0, void 0, function* () {
        const icarStops = yield icarStopRepository_1.icarStopRepository.getAllStops();
        const icarStopsWithDistanceAndDuration = icarStops.map((icarStop) => __awaiter(void 0, void 0, void 0, function* () {
            const { distance, duration } = yield osrmRepository_1.osrmRepository.getDistanceAndDuration(userPosition, icarStop.coordinate);
            return Object.assign(Object.assign({}, icarStop), { distance,
                duration });
        }));
        return yield Promise.all(icarStopsWithDistanceAndDuration);
    }),
    getStopById: (icarStopId, userPosition) => __awaiter(void 0, void 0, void 0, function* () {
        const icarStop = yield icarStopRepository_1.icarStopRepository.getStopById(icarStopId);
        if (!icarStop) {
            throw new NotFoundError_1.NotFoundError(errorMessages_1.errorMessages.icarStop.notFound);
        }
        const { distance, duration } = yield osrmRepository_1.osrmRepository.getDistanceAndDuration(userPosition, icarStop.coordinate);
        return Object.assign(Object.assign({}, icarStop), { distance,
            duration });
    }),
};
