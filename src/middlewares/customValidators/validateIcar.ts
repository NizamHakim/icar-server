import { parseCoordinate } from "../../types/coordinate";

export async function validateIcar(value: any, { req }: { req: any }) {
	const icar = typeof value === "string" ? JSON.parse(value) : value;

	const icarId = parseInt(icar.id);
	if (isNaN(icarId)) {
		throw new Error();
	}
	const icarPosition = parseCoordinate(icar.position);

	req.icar = { id: icarId, position: icarPosition };
	return true;
}
