import { PrismaClient } from "@prisma/client";
import { icarStopSeeder } from "./icarStopSeeder";
import { icarSeeder } from "./icarSeeder";
import { icarRouteSeeder } from "./icarRouteSeeder";
import { scheduleSeeder } from "./scheduleSeeder";
import { userSeeder } from "./userSeeder";
import { routeStopWaypointSeeder } from "./routeStopWaypointSeeder";

const prisma = new PrismaClient();

async function main() {
	await userSeeder();
	await icarRouteSeeder();
	await icarStopSeeder();
	await routeStopWaypointSeeder();
	await icarSeeder();
	await scheduleSeeder();
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
