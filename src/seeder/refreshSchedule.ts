import { prisma } from "../../src/utils/prisma";
import { scheduleSeeder } from "./scheduleSeeder";

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
