import { icarRouteRepository } from "../repositories/icarRouteRepository";
import { osrmRepository } from "../repositories/osrmRepository";
import { Coordinate } from "../types/coordinate";

export const icarRouteService = {
	getAllRoutes: async () => {
		const routes = await icarRouteRepository.getAllRoutes();

		const routesWithPolyline = routes.map(async (route) => {
			const coordinates = route.routeStopWaypoints.map((wp) => {
				return wp.icarStop.coordinate as Coordinate;
			});

			const polylinePoints = await osrmRepository.getPolyline(coordinates);

			return {
				...route,
				polylinePoints,
			};
		});
		return await Promise.all(routesWithPolyline);
	},
	getRouteById: async (icarRouteId: number) => {
		return await icarRouteRepository.getRouteById(icarRouteId);
	},
};
