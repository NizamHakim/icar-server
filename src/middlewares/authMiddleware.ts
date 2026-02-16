import { checkSchema } from "express-validator";
import { validateAuth } from "./customValidators/validateAuth";
import { messagesUtils } from "../utils/messagesUtils";

export const authMiddleware = {
	validateToken: checkSchema({
		"x-auth-token": {
			custom: {
				bail: true,
				options: validateAuth.authToken,
				errorMessage: messagesUtils.error.auth.invalidToken,
			},
		},
	}),
	validateSignup: checkSchema({
		name: {
			notEmpty: {
				bail: true,
				errorMessage: messagesUtils.error.auth.nameRequired,
			},
		},
		email: {
			notEmpty: {
				bail: true,
				errorMessage: messagesUtils.error.auth.emailRequired,
			},
			isEmail: {
				bail: true,
				errorMessage: messagesUtils.error.auth.emailInvalid,
			},
			custom: {
				bail: true,
				options: validateAuth.emailAlreadyRegistered,
				errorMessage: messagesUtils.error.auth.emailRegistered,
			},
		},
		password: {
			notEmpty: {
				bail: true,
				errorMessage: messagesUtils.error.auth.passwordRequired,
			},
			isLength: {
				bail: true,
				options: { min: 8 },
				errorMessage: messagesUtils.error.auth.passwordTooShort,
			},
		},
		confirmPassword: {
			notEmpty: {
				bail: true,
				errorMessage: messagesUtils.error.auth.confirmPasswordRequired,
			},
			custom: {
				bail: true,
				options: validateAuth.confirmPasswordMismatch,
				errorMessage: messagesUtils.error.auth.confirmPasswordMismatch,
			},
		},
	}),
	validateLogin: checkSchema({
		email: {
			notEmpty: {
				bail: true,
				errorMessage: messagesUtils.error.auth.emailRequired,
			},
			isEmail: {
				bail: true,
				errorMessage: messagesUtils.error.auth.emailInvalid,
			},
		},
		password: {
			notEmpty: {
				bail: true,
				errorMessage: messagesUtils.error.auth.passwordRequired,
			},
		},
	}),
};
