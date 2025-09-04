import { IcarStatus, PrismaClient, TicketStatus } from "@prisma/client";
import { datetime } from "../utils/datetime";
const prisma = new PrismaClient();

export const scheduleRepository = {
	// USECASE
	getScheduleListByStopAndRoute: async (
		icarStopId: number,
		icarRouteId: number
	) => {
		return await prisma.schedule.findMany({
			where: {
				icarStopId: icarStopId,
				icar: {
					status: IcarStatus.ACTIVE,
					icarRouteId: icarRouteId,
				},
				arrivalTime: {
					gte: datetime.dateToTime(new Date()),
				},
			},
			include: {
				icar: {
					include: {
						icarRoute: true,
					},
				},
				icarStop: true,
			},
			orderBy: {
				arrivalTime: "asc",
			},
		});
	},
	// FALLBACK
	getSchedules: async () => {
		return await prisma.schedule.findMany({});
	},
	getScheduleById: async (scheduleId: number) => {
		return await prisma.schedule.findUnique({
			where: {
				id: scheduleId,
			},
		});
	},
};
