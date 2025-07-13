import { checkSchema } from "express-validator";
import { validateAuthToken } from "./customValidators/validateAuthToken";
import { errorMessages } from "../errors/core/errorMessages";
import { validateEmail } from "./customValidators/validateEmail";
import { validatePassword } from "./customValidators/validatePassword";

export const authMiddleware = {
	validateToken: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuthToken,
				errorMessage: errorMessages.auth.invalidToken,
			},
		},
	}),
	validateSignup: checkSchema({
		name: {
			notEmpty: {
				bail: true,
				errorMessage: errorMessages.auth.nameRequired,
			},
		},
		email: {
			notEmpty: {
				bail: true,
				errorMessage: errorMessages.auth.emailRequired,
			},
			isEmail: {
				bail: true,
				errorMessage: errorMessages.auth.emailInvalidFormat,
			},
			custom: {
				bail: true,
				options: validateEmail.alreadyRegistered,
				errorMessage: errorMessages.auth.emailAlreadyRegistered,
			},
		},
		password: {
			notEmpty: {
				bail: true,
				errorMessage: errorMessages.auth.passwordRequired,
			},
			isLength: {
				bail: true,
				options: { min: 8 },
				errorMessage: errorMessages.auth.passwordMinLength,
			},
		},
		confirmPassword: {
			notEmpty: {
				bail: true,
				errorMessage: errorMessages.auth.confirmPasswordRequired,
			},
			custom: {
				bail: true,
				options: validatePassword.confirmPasswordMismatch,
				errorMessage: errorMessages.auth.confirmPasswordMismatch,
			},
		},
	}),
	validateLogin: checkSchema({
		email: {
			notEmpty: {
				bail: true,
				errorMessage: errorMessages.auth.emailRequired,
			},
			isEmail: {
				bail: true,
				errorMessage: errorMessages.auth.emailInvalidFormat,
			},
		},
		password: {
			notEmpty: {
				bail: true,
				errorMessage: errorMessages.auth.passwordRequired,
			},
		},
	}),
};
