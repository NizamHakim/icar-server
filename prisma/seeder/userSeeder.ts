import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const SALT_ROUNDS = 10;

const prisma = new PrismaClient();

export const userSeeder = async () => {
	await prisma.user.createMany({
		data: [
			{
				name: "Nizam Hakim",
				email: "nizamhakim282@gmail.com",
				password: await bcrypt.hash("08juli2003", SALT_ROUNDS),
			},
		],
	});
};
