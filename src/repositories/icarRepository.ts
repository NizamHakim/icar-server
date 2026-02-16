import { IcarStatus } from "../../generated/prisma/enums";
import { prisma } from "../utils/prisma";

export const icarRepository = {
  // USE CASE
  getIcarsWithSchedulesByStopId: async (icarStopId: number) => {
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
