import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarRouteRepository = {
	getAllRoutes: async () => {
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
