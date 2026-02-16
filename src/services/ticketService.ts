import { DateTime } from "luxon";
import { TicketStatus } from "../../generated/prisma/enums";
import { scheduleRepository } from "../repositories/scheduleRepository";
import { ticketRepository } from "../repositories/ticketRepository";
import { osrmRepository } from "../repositories/osrmRepository";
import { timeUtils } from "../utils/timeUtils";
import { NotFoundError } from "../utils/errors/expectedError/NotFoundError";
import { messagesUtils } from "../utils/messagesUtils";

export const ticketService = {
  getTickets: async ({
    userId,
    status,
  }: {
    userId?: number;
    status?: TicketStatus;
  }) => {
    const tickets = await ticketRepository.getTickets({
      userId: userId,
      status: status,
    });

    return tickets;
  },
  createTicket: async (userId: number, scheduleId: number) => {
    const schedule = await scheduleRepository.getScheduleById(scheduleId);
    if (!schedule) {
      throw new NotFoundError(messagesUtils.error.schedule.notFound);
    }

    const arrivedAt = timeUtils.timeToDate(schedule.arrivalTime);
    const expiredAt = DateTime.fromJSDate(arrivedAt)
      .plus({
        minutes: 5,
      })
      .toJSDate();

    const ticket = await ticketRepository.createTicket(
      userId,
      scheduleId,
      arrivedAt,
      expiredAt,
    );

    return ticket;
  },
  updateTicketStatus: async (ticketId: number, status: TicketStatus) => {
    const ticket = await ticketRepository.getTicketById(ticketId);
    if (!ticket) {
      throw new NotFoundError(messagesUtils.error.ticket.notFound);
    }
    return await ticketRepository.updateTicketStatus(ticketId, status);
  },
  updateReview: async (ticketId: number, review: Review) => {
    const ticket = await ticketRepository.getTicketById(ticketId);
    if (!ticket) {
      throw new NotFoundError(messagesUtils.error.ticket.notFound);
    }
    return await ticketRepository.updateReview(ticketId, review);
  },
  getTicketsDistance: async (
    userId: number,
    icarId: number,
    icarPosition: Coordinate,
  ) => {
    const tickets = await ticketRepository.getTicketsByIcarId(
      TicketStatus.IN_QUEUE,
      userId,
      icarId,
    );

    const ticketsWithDistance = tickets.map(async (ticket) => {
      const { distance } = await osrmRepository.getDistanceAndDuration(
        icarPosition,
        ticket.schedule.icarStop.coordinate as Coordinate,
      );

      return {
        ticketId: ticket.id,
        distance: distance,
      };
    });

    return await Promise.all(ticketsWithDistance);
  },
  cancelTickets: async (icarId: number, userId: number) => {
    return ticketRepository.cancelTickets(icarId, userId);
  },
  // FALLBACK
  getTicketById: async (ticketId: number) => {
    const ticket = await ticketRepository.getTicketById(ticketId);
    if (!ticket) {
      throw new NotFoundError(messagesUtils.error.ticket.notFound);
    }

    const ticketCounts = await ticketRepository.ticketCountByArrivedAt(
      ticket.arrivedAt,
    );

    return {
      ...ticket,
      schedule: {
        ...ticket.schedule,
        ticketCount: ticketCounts,
      },
    };
  },
};
