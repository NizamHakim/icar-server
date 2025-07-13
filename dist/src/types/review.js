"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseReview = parseReview;
function parseReview(json) {
    const review = JSON.parse(json);
    if (typeof review !== "object" || typeof review.rating !== "number") {
        throw new Error();
    }
    return review;
}
