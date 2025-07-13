import { parseCoordinate } from "../../types/coordinate";

export async function validateUserPosition(value: any, { req }: { req: any }) {
	const userPosition = parseCoordinate(value);

	req.user = { ...req.user, position: userPosition };
	return true;
}
