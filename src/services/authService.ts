import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { jwtUtils } from "../utils/jwt";
import { errorMessages } from "../errors/core/errorMessages";
import { UnprocessableEntityError } from "../errors/UnprocessableEntityError";

const SALT_ROUNDS = 10;

export const authService = {
	getUserData: async (userId: number) => {
		const user = await userRepository.getUserById(userId);
		if (!user) {
			throw new UnauthorizedError(errorMessages.auth.userNotFound);
		}

		return user;
	},
	login: async (email: string, password: string) => {
		const user = await userRepository.getUserByEmail(email);
		if (!user) {
			throw new UnprocessableEntityError("VALIDATION_ERROR", {
				email: errorMessages.auth.emailPasswordCombinationInvalid,
				password: errorMessages.auth.emailPasswordCombinationInvalid,
			});
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			throw new UnprocessableEntityError("VALIDATION_ERROR", {
				password: errorMessages.auth.emailPasswordCombinationInvalid,
				email: errorMessages.auth.emailPasswordCombinationInvalid,
			});
		}

		return {
			user: user,
			token: jwtUtils.signToken(user),
		};
	},
	signup: async (name: string, email: string, password: string) => {
		const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
		const newUser = await userRepository.createNewUser(
			name,
			email,
			hashedPassword
		);

		return {
			user: newUser,
			token: jwtUtils.signToken(newUser),
		};
	},
	logout: () => {},
};
