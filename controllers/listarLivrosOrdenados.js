const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    let ordernarPorPaginas = livros.sort((a, b)  => a.paginas - b.paginas)
    console.table(ordernarPorPaginas)
}

module.exports = listarLivrosOrdenados