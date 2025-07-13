"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCoordinate = parseCoordinate;
function parseCoordinate(json) {
    const coordinate = typeof json === "string" ? JSON.parse(json) : json;
    if (typeof coordinate !== "object" ||
        typeof coordinate.latitude !== "number" ||
        typeof coordinate.longitude !== "number") {
        throw new Error();
    }
    return coordinate;
}
