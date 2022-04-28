const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    let livrosRecomendados = livros.filter(livros => livros.recomenda === true)
    console.table(livrosRecomendados)
}

module.exports = listarRecomendados