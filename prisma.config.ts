import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx src/seeder/seed.ts",
  },
  datasource: {
    url: env("POSTGRE_URL"),
  },
});
