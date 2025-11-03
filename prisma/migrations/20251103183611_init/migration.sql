-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "descricao" TEXT NOT NULL,
    "orcamento" INTEGER NOT NULL,
    "gerente" TEXT,
    "prazo" TIMESTAMP(3) NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projetos_descricao_key" ON "projetos"("descricao");
