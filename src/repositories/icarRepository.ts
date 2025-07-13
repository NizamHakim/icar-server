import { IcarStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarRepository = {
	// USE CASE
	getIcarsWithScheduleByStopId: async (icarStopId: number) => {
		const now = new Date();
		const startOfDay = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate()
		);
		const endOfDay = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			23,
			59,
			59,
			999
		);

		return await prisma.icar.findMany({
			include: {
				icarRoute: true,
				schedules: {
					where: {
						icarStopId: icarStopId,
						arrivalTime: {
							gte: startOfDay,
							lte: endOfDay,
						},
					},
				},
			},
		});
	},
	updateIcarStatus: async (icarId: number, status: IcarStatus) => {
		return await prisma.icar.update({
			where: { id: icarId },
			data: { status: status },
		});
	},
	// FALLBACK
	getIcars: async () => {
		return await prisma.icar.findMany({});
	},
	getIcarById: async (icarId: number) => {
		return await prisma.icar.findUnique({
			where: { id: icarId },
		});
	},
};
