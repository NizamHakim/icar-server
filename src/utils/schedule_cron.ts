import { scheduleSeeder } from "../../prisma/seeder/scheduleSeeder";
import cron from "node-cron";

export const scheduleCron = () => {
	cron.schedule(
		"0 0 * * *",
		async () => {
			try {
				console.log("Generating schedules at midnight...");
				await scheduleSeeder();
			} catch (error) {
				console.error("Error during schedule generation:", error);
			}
		},
		{
			timezone: "Asia/Jakarta",
		}
	);
};
