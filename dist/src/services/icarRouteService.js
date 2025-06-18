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
exports.icarRouteService = void 0;
const icarRouteRepository_1 = require("../repositories/icarRouteRepository");
const osrmRepository_1 = require("../repositories/osrmRepository");
exports.icarRouteService = {
    getAllRoutes: () => __awaiter(void 0, void 0, void 0, function* () {
        const routes = yield icarRouteRepository_1.icarRouteRepository.getAllRoutes();
        const routesWithPolyline = routes.map((route) => __awaiter(void 0, void 0, void 0, function* () {
            const coordinates = route.routeStopWaypoints.map((wp) => {
                return wp.icarStop.coordinate;
            });
            const polylinePoints = yield osrmRepository_1.osrmRepository.getPolyline(coordinates);
            return Object.assign(Object.assign({}, route), { polylinePoints });
        }));
        return yield Promise.all(routesWithPolyline);
    }),
    getRouteById: (icarRouteId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield icarRouteRepository_1.icarRouteRepository.getRouteById(icarRouteId);
    }),
};
