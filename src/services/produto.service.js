const Produto =
    require("../models/produto.model");

const produto = new Produto();

function listar() {
    return produto;
}

function buscarPorId(id) {
    return produto.find(p => p.id === Number(id));
}

function criar(dados) {
    if (!dados.nome || dados.preco == null) {
        throw new Error("nome e preco são obrigatórios");
    }

    const produtos = {
        id: produtos.length + 1,
        nome: dados.nome,
        preco: dados.preco
    };

    produtos.push(produtos);
    return produtos;
}

module.exports = { listar, buscarPorId, criar };