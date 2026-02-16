import { IcarStatus } from "../../generated/prisma/enums";
import { prisma } from "../utils/prisma";
import { timeUtils } from "../utils/timeUtils";

export const scheduleRepository = {
  // USECASE
  getScheduleListByStopAndRoute: async (
    icarStopId: number,
    icarRouteId: number,
  ) => {
    return await prisma.schedule.findMany({
      where: {
        icarStopId: icarStopId,
        icar: {
          status: IcarStatus.ACTIVE,
          icarRouteId: icarRouteId,
        },
        arrivalTime: {
          gte: timeUtils.dateToTime(new Date()),
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
