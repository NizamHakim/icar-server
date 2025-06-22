import { DateTime } from "luxon";
import { TicketStatus } from "@prisma/client";
import { NotFoundError } from "../errors/NotFoundError";
import { scheduleRepository } from "../repositories/scheduleRepository";
import { ticketRepository } from "../repositories/ticketRepository";
import { errorMessages } from "../errors/core/errorMessages";
import { Coordinate } from "../types/coordinate";
import { osrmRepository } from "../repositories/osrmRepository";
import {
	getTicketDistanceStatus,
	TicketDistanceStatus,
} from "../types/ticketDistanceStatus";
import { Review } from "../types/review";

export const ticketService = {
	getTicketByStatus: async (userId: number, status: string) => {
		return await ticketRepository.getUserTicketByStatus(
			userId,
			status as TicketStatus
		);
	},
	getClosestUserTicket: async (userId: number) => {
		return await ticketRepository.getClosestUserTicket(userId);
	},
	getTicketById: async (ticketId: number) => {
		const ticket = await ticketRepository.getTicketById(ticketId);
		if (!ticket) {
			throw new NotFoundError(errorMessages.ticket.notFound);
		}

		return ticket;
	},
	createTicket: async (userId: number, scheduleId: number) => {
		const schedule = await scheduleRepository.getScheduleById(scheduleId);
		if (!schedule) {
			throw new NotFoundError(errorMessages.schedule.notFound);
		}

		const expiredAt = DateTime.fromJSDate(schedule.arrivalTime).plus({
			minutes: 5,
		});

		const ticket = await ticketRepository.createTicket(
			userId,
			scheduleId,
			expiredAt.toJSDate()
		);

		return ticket;
	},
	cancelTicket: async (ticketId: number) => {
		const ticket = await ticketRepository.getTicketById(ticketId);
		if (!ticket) {
			throw new NotFoundError(errorMessages.ticket.notFound);
		}
		return await ticketRepository.updateTicketStatus(
			ticketId,
			TicketStatus.CANCELED
		);
	},
	finishTicket: async (ticketId: number) => {
		const ticket = await ticketRepository.getTicketById(ticketId);
		if (!ticket) {
			throw new NotFoundError(errorMessages.ticket.notFound);
		}
		return await ticketRepository.updateTicketStatus(
			ticketId,
			TicketStatus.FINISHED
		);
	},
	distanceStatus: async (
		userId: number,
		icarId: number,
		icarPosition: Coordinate
	) => {
		const tickets = await ticketRepository.getInqueueTicketsByIcarId(
			userId,
			icarId
		);

		const ticketsWithDistance = tickets.map(async (ticket) => {
			const { distance } = await osrmRepository.getDistanceAndDuration(
				icarPosition,
				ticket.schedule.icarStop.coordinate as Coordinate
			);

			const distanceStatus = getTicketDistanceStatus(distance);

			if (distanceStatus == TicketDistanceStatus.ARRIVED) {
				ticketRepository.updateTicketStatus(ticket.id, TicketStatus.FINISHED);
			}

			return {
				ticketId: ticket.id,
				distanceStatus: distanceStatus.toString(),
			};
		});

		return await Promise.all(ticketsWithDistance);
	},
	getReviewAndSuggestionOptions: () => {
		return {
			reviewOptions: ticketRepository.getReviewOptions(),
		};
	},
	updateReview: async (ticketId: number, review: Review) => {
		return await ticketRepository.updateReview(ticketId, review);
	},
};
