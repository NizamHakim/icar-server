"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketDistanceStatus = void 0;
exports.getTicketDistanceStatus = getTicketDistanceStatus;
var TicketDistanceStatus;
(function (TicketDistanceStatus) {
    TicketDistanceStatus["NOTHING"] = "NOTHING";
    TicketDistanceStatus["CLOSE"] = "CLOSE";
    TicketDistanceStatus["ARRIVED"] = "ARRIVED";
})(TicketDistanceStatus || (exports.TicketDistanceStatus = TicketDistanceStatus = {}));
function getTicketDistanceStatus(distance) {
    if (distance < 100) {
        return TicketDistanceStatus.ARRIVED;
    }
    else if (distance < 300) {
        return TicketDistanceStatus.CLOSE;
    }
    else {
        return TicketDistanceStatus.NOTHING;
    }
}
