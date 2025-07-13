"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewService = void 0;
const reviewRepository_1 = require("../repositories/reviewRepository");
exports.reviewService = {
    getReviewOptions: () => {
        return {
            reviewOptions: reviewRepository_1.reviewRepository.getReviewOptions(),
        };
    },
};
