import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const icarRouteSeeder = async () => {
	await prisma.icarRoute.createMany({
		data: [
			{
				name: "Bunderan ITS - Asrama ITS",
				color: "#CC6F05",
			},
			{
				name: "Kantin ITS - Robotika",
				color: "#40A823",
			},
		],
	});
};
