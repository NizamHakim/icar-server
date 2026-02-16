import { TicketStatus } from "../../generated/prisma/enums";
import { prisma } from "../utils/prisma";

export const ticketRepository = {
  getTickets: async ({
    userId,
    status,
  }: {
    userId?: number;
    status?: TicketStatus;
  }) => {
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
      orderBy: [
        {
          arrivedAt: "asc",
        },
        {
          id: "desc",
        },
      ],
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
          },
        },
      },
    });
  },
  getTicketsByIcarId: async (
    status: TicketStatus,
    userId: number,
    icarId: number,
  ) => {
    return await prisma.ticket.findMany({
      where: {
        userId: userId,
        status: status,
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
  createTicket: async (
    userId: number,
    scheduleId: number,
    arrivedAt: Date,
    expiredAt: Date,
  ) => {
    return await prisma.ticket.create({
      data: {
        userId: userId,
        scheduleId: scheduleId,
        status: TicketStatus.IN_QUEUE,
        arrivedAt: arrivedAt,
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
  cancelTickets: async (icarId: number, userId: number) => {
    return await prisma.ticket.updateMany({
      where: {
        userId: userId,
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
  ticketCountByArrivedAt: async (arrivedAt: Date) => {
    return await prisma.ticket.count({
      where: {
        arrivedAt: arrivedAt,
        status: TicketStatus.IN_QUEUE,
      },
    });
  },
};
