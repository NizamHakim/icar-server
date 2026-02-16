import { prisma } from "../utils/prisma";

export const icarStopRepository = {
  getStops: async () => {
    return await prisma.icarStop.findMany();
  },
  getStopById: async (id: number) => {
    return await prisma.icarStop.findUnique({
      where: {
        id: id,
      },
    });
  },
};
