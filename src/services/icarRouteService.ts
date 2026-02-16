import { icarRouteRepository } from "../repositories/icarRouteRepository";
import { osrmRepository } from "../repositories/osrmRepository";
import { NotFoundError } from "../utils/errors/expectedError/NotFoundError";
import { messagesUtils } from "../utils/messagesUtils";

export const icarRouteService = {
  // USECASE
  getRoutesWithPolylines: async () => {
    const routes = await icarRouteRepository.getRoutes();

    const routesWithPolyline = routes.map(async (route) => {
      const coordinates = route.routeStopWaypoints.map(
        (wp) => wp.icarStop.coordinate as Coordinate,
      );
      const polylinePoints = await osrmRepository.getPolyline(coordinates);

      return {
        ...route,
        polylinePoints,
      };
    });
    return await Promise.all(routesWithPolyline);
  },
  // FALLBACK
  getRoutes: async () => {
    return await icarRouteRepository.getRoutes();
  },
  getRouteById: async (icarRouteId: number) => {
    const icarRoute = await icarRouteRepository.getRouteById(icarRouteId);
    if (!icarRoute) {
      throw new NotFoundError(messagesUtils.error.icarRoute.notFound);
    }
    return icarRoute;
  },
};
