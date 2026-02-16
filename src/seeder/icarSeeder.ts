import { IcarStatus } from "../../generated/prisma/enums";
import { prisma } from "../../src/utils/prisma";

export const icarSeeder = async () => {
  const bunderanAsrama = await prisma.icarRoute.findUnique({
    where: { name: "Bunderan ITS - Asrama ITS" },
  });

  const kantinRobotika = await prisma.icarRoute.findUnique({
    where: { name: "Kantin ITS - Robotika" },
  });

  await prisma.icar.createMany({
    data: [
      {
        name: "iCar 1",
        capacity: 6,
        status: IcarStatus.ACTIVE,
        icarRouteId: bunderanAsrama!.id,
      },
      {
        name: "iCar 2",
        capacity: 6,
        status: IcarStatus.ACTIVE,
        icarRouteId: kantinRobotika!.id,
      },
    ],
  });
};
