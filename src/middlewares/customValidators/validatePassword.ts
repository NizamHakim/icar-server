export const validatePassword = {
	confirmPasswordMismatch: async (value: any, { req }: { req: any }) => {
		if (value !== req.body.password) {
			throw new Error();
		}
		return true;
	},
};
