import { IcarStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarSeeder = async () => {
	const bunderanAsrama = await prisma.icarRoute.findUnique({
		where: { name: "Bunderan ITS - Asrama ITS" },
	});
	const gerbangITS = await prisma.icarStop.findUnique({
		where: { name: "Gerbang ITS" },
	});

	const kantinRobotika = await prisma.icarRoute.findUnique({
		where: { name: "Kantin ITS - Robotika" },
	});
	const kantinPusat = await prisma.icarStop.findUnique({
		where: { name: "Kantin Pusat ITS" },
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
