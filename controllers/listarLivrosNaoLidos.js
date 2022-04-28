const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
        let livrosNaoLidos = livros.filter(livros => livros.leu === false)
        console.table(livrosNaoLidos)
    }

module.exports = listarLivrosNaoLidos 