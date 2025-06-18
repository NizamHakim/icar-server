import { PrismaClient, TicketStatus } from "@prisma/client";
import { Review } from "../types/review";
const prisma = new PrismaClient();

export const ticketRepository = {
	getUserTicketByStatus: async (userId: number, status: TicketStatus) => {
		return await prisma.ticket.findMany({
			where: {
				userId: userId,
				status: status,
			},
			include: {
				schedule: {
					include: {
						icarStop: true,
						icar: {
							include: {
								icarRoute: true,
							},
						},
					},
				},
			},
			orderBy: {
				schedule: {
					arrivalTime: "desc",
				},
			},
		});
	},
	getClosestUserTicket: async (userId: number) => {
		return await prisma.ticket.findFirst({
			where: {
				userId: userId,
				status: TicketStatus.IN_QUEUE,
			},
			include: {
				schedule: {
					include: {
						icarStop: true,
						icar: {
							include: {
								icarRoute: true,
							},
						},
					},
				},
			},
			orderBy: {
				schedule: {
					arrivalTime: "asc",
				},
			},
		});
	},
	getTicketById: async (ticketId: number) => {
		return await prisma.ticket.findUnique({
			where: {
				id: ticketId,
			},
			include: {
				schedule: {
					include: {
						icarStop: true,
						icar: {
							include: {
								icarRoute: true,
							},
						},
						tickets: {
							where: {
								status: TicketStatus.IN_QUEUE,
							},
						},
					},
				},
			},
		});
	},
	createTicket: async (userId: number, scheduleId: number, expiredAt: Date) => {
		return await prisma.ticket.create({
			data: {
				userId: userId,
				scheduleId: scheduleId,
				status: TicketStatus.IN_QUEUE,
				expiredAt: expiredAt,
			},
		});
	},
	updateTicketStatus: async (ticketId: number, ticketStatus: TicketStatus) => {
		return await prisma.ticket.update({
			where: {
				id: ticketId,
			},
			data: {
				status: ticketStatus,
			},
		});
	},
	getInqueueTicketsByIcarId: async (userId: number, icarId: number) => {
		return await prisma.ticket.findMany({
			where: {
				userId: userId,
				status: TicketStatus.IN_QUEUE,
				schedule: {
					icarId: icarId,
				},
			},
			include: {
				schedule: {
					include: {
						icarStop: true,
					},
				},
			},
		});
	},
	getReviewOptions: () => {
		return {
			1: [
				"PUNCTUALITY",
				"TRAVEL_SAFETY",
				"COMFORT",
				"CLEANLINESS",
				"TRAVEL_SPEED",
				"APPLICATION_SERVICE",
				"NUMBER_OF_SEATS",
				"TRAVEL_ROUTE",
				"NUMBER_OF_STOPS",
			],
			2: [
				"PUNCTUALITY",
				"TRAVEL_SAFETY",
				"COMFORT",
				"CLEANLINESS",
				"TRAVEL_SPEED",
				"APPLICATION_SERVICE",
				"NUMBER_OF_SEATS",
				"TRAVEL_ROUTE",
				"NUMBER_OF_STOPS",
			],
			3: [
				"PUNCTUALITY",
				"TRAVEL_SAFETY",
				"COMFORT",
				"CLEANLINESS",
				"TRAVEL_SPEED",
				"APPLICATION_SERVICE",
				"NUMBER_OF_SEATS",
				"TRAVEL_ROUTE",
				"NUMBER_OF_STOPS",
			],
			4: [
				"PUNCTUALITY",
				"TRAVEL_SAFETY",
				"COMFORT",
				"CLEANLINESS",
				"TRAVEL_SPEED",
				"APPLICATION_SERVICE",
				"NUMBER_OF_SEATS",
				"TRAVEL_ROUTE",
				"NUMBER_OF_STOPS",
			],
			5: [
				"PUNCTUALITY",
				"TRAVEL_SAFETY",
				"COMFORT",
				"CLEANLINESS",
				"APPLICATION_SERVICE",
			],
		};
	},
	updateReview: async (ticketId: number, review: Review) => {
		return await prisma.ticket.update({
			where: {
				id: ticketId,
			},
			data: {
				review: review,
			},
		});
	},
	cancelTicketsByIcarId: async (icarId: number) => {
		return await prisma.ticket.updateMany({
			where: {
				schedule: {
					icarId: icarId,
				},
				status: TicketStatus.IN_QUEUE,
			},
			data: {
				status: TicketStatus.CANCELED,
			},
		});
	},
};
