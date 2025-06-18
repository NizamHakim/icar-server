import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
	getUserById: async (userId: number) => {
		return await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
	},
	getUserByEmail: async (email: string) => {
		return await prisma.user.findUnique({
			where: {
				email: email,
			},
		});
	},
	createNewUser: async (name: string, email: string, password: string) => {
		return await prisma.user.create({
			data: {
				name: name,
				email: email,
				password: password,
			},
		});
	},
};
