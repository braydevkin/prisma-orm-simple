import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "1",
      name: "User",
      email: "email@email.com",
      groups: {
        connectOrCreate: {
          where: {
            id: "group-1",
          },
          create: {
            id: "group-1",
            name: "Grupo 01",
          },
        },
      },
    },
  });
}

main();
