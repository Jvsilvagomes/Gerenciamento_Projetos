import * as projetoModel from "./../models/projetoModel.js"

export const listarTodos = async (req, res) => {
    try {
        const projetos = await projetoModel.findAll();


        if (!projetos || projetos.length === 0 ){
            res.status(404).json({
                total: projetos.length,
                message: "Não tem projetos nesta lista",
                projetos
            });
        }

        res.status(200).json({
            total: projetos.length,
            message: "Projetos",
            projetos
        });
    } catch (error) {
        res.status(500).json({
            erro: "Erro interno do servidor!",
            detalhes: "error.message",
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const projeto = await projetoModel.findById(id);

        if (!projeto) {
            return res.status(404).json({
                erro: 'Projeto não encontrado',
                message: 'Verifique se o id do projeto existe',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'Projeto encontrado!',
            projeto
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro na busca do projeto por id',
            detalhes: error.message
        })
    }
}