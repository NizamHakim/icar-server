import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarStopRepository = {
	getAllStops: async () => {
		return await prisma.icarStop.findMany();
	},
	getStopById: async (id: number) => {
		return await prisma.icarStop.findUnique({
			where: {
				id: id,
			},
		});
	},
};
