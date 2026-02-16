import bcrypt from "bcrypt";
import { prisma } from "../../src/utils/prisma";

const SALT_ROUNDS = 10;

export const userSeeder = async () => {
  await prisma.user.createMany({
    data: [
      {
        name: "User",
        email: "user@email.com",
        password: await bcrypt.hash("00000000", SALT_ROUNDS),
      },
    ],
  });
};
