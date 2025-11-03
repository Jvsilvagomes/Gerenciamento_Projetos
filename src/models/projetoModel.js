import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.projeto.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const findById = async (id) => {
    return await prisma.projeto.findUnique({
        where: { id: Number(id) }
    });
}

export const create = async (data) => {
    return await prisma.bruxo.create({
        data: {
            nome: data.nome,
            descricao: data.descricao,
            gerente: data.gerente,
            dataInicio: data.dataInicio,
            prazo: data.prazo,
            orcamento: data.orcamento
        }
    });
}

export const deleteProjeto = async (id) => {
    return await prisma.projeto.delete({
        where: { id: Number(id) }
    })
}

export const update = async (id, data) => {
    return await prisma.projeto.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.descricao && { casa: data.descricao }),
            ...(data.gerente && { gerente: data.gerente }),
            ...(data.orcamento && { orcamento: data.orcamento}),
            ...(data.prazo && { prazo: Number(data.prazo) }),
            ...(data.ativo !== undefined && { ativo: data.ativo }),
        }
    })
}