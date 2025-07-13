export type Coordinate = {
	latitude: number;
	longitude: number;
};

export function parseCoordinate(json: string): Coordinate {
	const coordinate = typeof json === "string" ? JSON.parse(json) : json;

	if (
		typeof coordinate !== "object" ||
		typeof coordinate.latitude !== "number" ||
		typeof coordinate.longitude !== "number"
	) {
		throw new Error();
	}

	return coordinate as Coordinate;
}
