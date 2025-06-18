import { checkSchema } from "express-validator";
import { userRepository } from "../repositories/userRepository";
import { jwtUtils } from "../utils/jwt";

export const authMiddleware = {
	validateToken: checkSchema(
		{
			"x-auth-token": {
				custom: {
					bail: true,
					options: async (value, { req }) => {
						const decodedToken = jwtUtils.verifyToken(value);
						if (!decodedToken.userId) {
							throw new Error("INVALID_TOKEN");
						}

						req.user = { id: decodedToken.userId };
						return true;
					},
					errorMessage: "INVALID_TOKEN",
				},
			},
		},
		["headers"]
	),
	validateSignup: checkSchema(
		{
			name: {
				notEmpty: {
					bail: true,
					errorMessage: "NAME_REQUIRED",
				},
			},
			email: {
				notEmpty: {
					bail: true,
					errorMessage: "EMAIL_REQUIRED",
				},
				isEmail: {
					bail: true,
					errorMessage: "EMAIL_INVALID_FORMAT",
				},
				custom: {
					bail: true,
					options: async (value, { req }) => {
						const user = await userRepository.getUserByEmail(value);
						if (user) {
							throw new Error("EMAIL_ALREADY_REGISTERED");
						}
						return true;
					},
					errorMessage: "EMAIL_ALREADY_REGISTERED",
				},
			},
			password: {
				notEmpty: {
					bail: true,
					errorMessage: "PASSWORD_REQUIRED",
				},
				isLength: {
					bail: true,
					options: { min: 8 },
					errorMessage: "PASSWORD_MIN_LENGTH",
				},
			},
			confirmPassword: {
				notEmpty: {
					bail: true,
					errorMessage: "CONFIRM_PASSWORD_REQUIRED",
				},
				custom: {
					bail: true,
					options: (value, { req }) => {
						if (value !== req.body.password) {
							throw new Error("CONFIRM_PASSWORD_MISMATCH");
						}
						return true;
					},
					errorMessage: "CONFIRM_PASSWORD_MISMATCH",
				},
			},
		},
		["body"]
	),
	validateLogin: checkSchema(
		{
			email: {
				notEmpty: {
					bail: true,
					errorMessage: "EMAIL_REQUIRED",
				},
				isEmail: {
					bail: true,
					errorMessage: "EMAIL_INVALID_FORMAT",
				},
			},
			password: {
				notEmpty: {
					bail: true,
					errorMessage: "PASSWORD_REQUIRED",
				},
			},
		},
		["body"]
	),
};
