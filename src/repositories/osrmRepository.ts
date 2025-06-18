import { BadGatewayError } from "../errors/BadGatewayError";
import { errorMessages } from "../errors/core/errorMessages";
import { Coordinate } from "../types/coordinate";

export const osrmRepository = {
	getPolyline: async (waypoints: Array<Coordinate>) => {
		const closedWaypoints = [...waypoints, waypoints[0]];

		const url = `${process.env.OSRM_URL}/${closedWaypoints
			.map((waypoint) => `${waypoint.longitude},${waypoint.latitude}`)
			.join(";")}?geometries=geojson`;

		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new BadGatewayError(errorMessages.osrm.fetchError);
		}

		const data = await response.json();

		const arrayCoordinates = data.routes[0].geometry.coordinates as Array<
			[number, number]
		>;

		return arrayCoordinates.map((coordinate) => {
			return {
				latitude: coordinate[1],
				longitude: coordinate[0],
			} as Coordinate;
		});
	},
	getDistanceAndDuration: async (
		coordinateA: Coordinate,
		coordinateB: Coordinate
	) => {
		const url = `${process.env.OSRM_URL}/${coordinateA.longitude},${coordinateA.latitude};${coordinateB.longitude},${coordinateB.latitude}`;

		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new BadGatewayError(errorMessages.osrm.fetchError);
		}

		const data = await response.json();

		return {
			distance: Math.floor(data.routes[0].distance),
			duration: Math.floor(data.routes[0].duration),
		};
	},
};
