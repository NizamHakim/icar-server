import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository";
import { jwtUtils } from "../utils/jwtUtils";
import { UnprocessableEntityError } from "../utils/errors/expectedError/UnprocessableEntityError";
import { UnauthorizedError } from "../utils/errors/expectedError/UnauthorizedError";
import { messagesUtils } from "../utils/messagesUtils";

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10");

export const authService = {
	getUserData: async (userId: number) => {
		const user = await userRepository.getUserById(userId);
		if (!user) {
			throw new UnauthorizedError(messagesUtils.error.auth.userNotFound);
		}

		return {
			...user,
			token: jwtUtils.signToken(user),
		};
	},
	login: async (email: string, password: string) => {
		const user = await userRepository.getUserByEmail(email);
		if (!user) {
			throw new UnprocessableEntityError(
				messagesUtils.error.auth.credentialsMismatch, {
				email: messagesUtils.error.auth.credentialsMismatch,
				password: messagesUtils.error.auth.credentialsMismatch,
			});
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			throw new UnprocessableEntityError(
				messagesUtils.error.auth.credentialsMismatch, {
				password: messagesUtils.error.auth.credentialsMismatch,
				email: messagesUtils.error.auth.credentialsMismatch,
			});
		}

		return {
			...user,
			token: jwtUtils.signToken(user),
		};
	},
	signup: async (name: string, email: string, password: string) => {
		const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
		const user = await userRepository.createUser(name, email, hashedPassword);

		return {
			...user,
			token: jwtUtils.signToken(user),
		};
	},
	logout: () => { },
};
