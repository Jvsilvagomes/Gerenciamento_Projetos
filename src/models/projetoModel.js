import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.projeto.findMany({
        orderBy: { nome: 'asc' }
    });
}
