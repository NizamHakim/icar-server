import { PrismaClient } from "@prisma/client";
import { scheduleSeeder } from "./scheduleSeeder";

const prisma = new PrismaClient();

async function refreshSchedule() {
	await prisma.ticket.deleteMany();
	await prisma.schedule.deleteMany();
	scheduleSeeder();
}

refreshSchedule()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
