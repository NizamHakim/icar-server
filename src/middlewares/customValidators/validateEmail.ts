import { userRepository } from "../../repositories/userRepository";

export const validateEmail = {
	alreadyRegistered: async (value: any, { req }: { req: any }) => {
		const user = await userRepository.getUserByEmail(value);
		if (user) {
			throw new Error();
		}
		return true;
	},
};
