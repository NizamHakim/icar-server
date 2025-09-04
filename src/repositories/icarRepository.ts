import { IcarStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarRepository = {
	// USE CASE
	getIcarsWithScheduleByStopId: async (icarStopId: number) => {
		return await prisma.icar.findMany({
			include: {
				icarRoute: true,
				schedules: {
					where: {
						icarStopId: icarStopId,
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
