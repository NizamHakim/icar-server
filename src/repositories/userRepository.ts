import { prisma } from "../utils/prisma";

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
  createUser: async (name: string, email: string, password: string) => {
    return await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
  },
};
