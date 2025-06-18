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
exports.osrmRepository = void 0;
const BadGatewayError_1 = require("../errors/BadGatewayError");
const errorMessages_1 = require("../errors/core/errorMessages");
exports.osrmRepository = {
    getPolyline: (waypoints) => __awaiter(void 0, void 0, void 0, function* () {
        const closedWaypoints = [...waypoints, waypoints[0]];
        const url = `${process.env.OSRM_URL}/${closedWaypoints
            .map((waypoint) => `${waypoint.longitude},${waypoint.latitude}`)
            .join(";")}?geometries=geojson`;
        const response = yield fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new BadGatewayError_1.BadGatewayError(errorMessages_1.errorMessages.osrm.fetchError);
        }
        const data = yield response.json();
        const arrayCoordinates = data.routes[0].geometry.coordinates;
        return arrayCoordinates.map((coordinate) => {
            return {
                latitude: coordinate[1],
                longitude: coordinate[0],
            };
        });
    }),
    getDistanceAndDuration: (coordinateA, coordinateB) => __awaiter(void 0, void 0, void 0, function* () {
        const url = `${process.env.OSRM_URL}/${coordinateA.longitude},${coordinateA.latitude};${coordinateB.longitude},${coordinateB.latitude}`;
        const response = yield fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new BadGatewayError_1.BadGatewayError(errorMessages_1.errorMessages.osrm.fetchError);
        }
        const data = yield response.json();
        return {
            distance: Math.floor(data.routes[0].distance),
            duration: Math.floor(data.routes[0].duration),
        };
    }),
};
