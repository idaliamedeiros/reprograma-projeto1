const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarRecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
===================== MENU ========================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quatidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]: 
`)

switch (resposta){
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default:
        console.log('Inválido.')
        break
}