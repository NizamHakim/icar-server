import { prisma } from "../utils/prisma";

export const icarRouteRepository = {
  getRoutes: async () => {
    return await prisma.icarRoute.findMany({
      include: {
        icars: true,
        routeStopWaypoints: {
          include: {
            icarStop: true,
          },
          orderBy: {
            order: "asc",
          },
        },
      },
    });
  },
  getRouteById: async (icarRouteId: number) => {
    return await prisma.icarRoute.findUnique({
      where: {
        id: icarRouteId,
      },
    });
  },
};
