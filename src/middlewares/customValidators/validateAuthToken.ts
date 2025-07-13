import { jwtUtils } from "../../utils/jwt";

export async function validateAuthToken(value: any, { req }: { req: any }) {
	const decodedToken = jwtUtils.verifyToken(value);
	if (!decodedToken.userId) {
		throw new Error();
	}

	req.user = { ...req.user, id: decodedToken.userId };
	return true;
}
