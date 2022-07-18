const BibliotecaVirtual = require('./biblioteca-virtual');
const ListaDeLivros = require('./lista-de-livros');
const Livro = require('./livro');

const favoritos = new ListaDeLivros('Favoritos');
const lendo = new ListaDeLivros('Lendo atualmente');
const minhaBiblioteca = new BibliotecaVirtual;

const rainhaDaEscuridao = new Livro('Rainha da Escuridão', 'Cassandra Clare');
lendo.adicionaNaLista(rainhaDaEscuridao)

const aBatalhaDoLabirinto = new Livro('A Batalha do Labirinto', 'Rick Riordan');
const cidadeDosOssos = new Livro('Cidade dos Ossos', 'Cassandra Clare');
const calafrio = new Livro('Calafrio', 'Maggie Stiefvater');
favoritos.adicionaNaLista(aBatalhaDoLabirinto);
favoritos.adicionaNaLista(cidadeDosOssos);
favoritos.adicionaNaLista(calafrio);

minhaBiblioteca.adicionaNaBiblioteca(lendo);
minhaBiblioteca.adicionaNaBiblioteca(favoritos);

console.log(minhaBiblioteca);

console.log(lendo);

console.log(favoritos);