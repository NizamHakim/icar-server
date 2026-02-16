import { IcarStatus } from "../../generated/prisma/enums";
import { icarRepository } from "../repositories/icarRepository";
import { timeUtils } from "../utils/timeUtils";
import { NotFoundError } from "../utils/errors/expectedError/NotFoundError";
import { messagesUtils } from "../utils/messagesUtils";

export const icarService = {
  // USE CASE
  getIcarsWithSchedulesByStopId: async (icarStopId: number) => {
    let icarList =
      await icarRepository.getIcarsWithSchedulesByStopId(icarStopId);

    icarList = icarList.filter((icar) => icar.schedules.length > 0);

    icarList.forEach((icar) => {
      icar.schedules = icar.schedules.map((schedule) => ({
        ...schedule,
        arrivalTime: timeUtils.timeToDate(schedule.arrivalTime),
      }));
    });

    return icarList;
  },
  connectIcar: async (icarId: number) => {
    await icarRepository.updateIcarStatus(icarId, IcarStatus.ACTIVE);
  },
  disconnectIcar: async (icarId: number) => {
    await icarRepository.updateIcarStatus(icarId, IcarStatus.INACTIVE);
  },
  // FALLBACK
  getIcars: async () => {
    return await icarRepository.getIcars();
  },
  getIcarById: async (icarId: number) => {
    const icar = await icarRepository.getIcarById(icarId);
    if (!icar) {
      throw new NotFoundError(messagesUtils.error.icar.notFound);
    }
    return icar;
  },
};
