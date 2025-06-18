import { DateTime } from "luxon";
import { IcarStatus, PrismaClient, TicketStatus } from "@prisma/client";
const prisma = new PrismaClient();

export const scheduleRepository = {
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
					gte: DateTime.now().toJSDate(),
				},
			},
			include: {
				icar: true,
				tickets: {
					where: {
						status: TicketStatus.IN_QUEUE,
					},
				},
			},
			orderBy: {
				arrivalTime: "asc",
			},
		});
	},
	getScheduleById: async (scheduleId: number) => {
		return await prisma.schedule.findUnique({
			where: {
				id: scheduleId,
			},
		});
	},
};
