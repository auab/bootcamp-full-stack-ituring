/*
Crie uma função que recaba uma lista de filmes como parâmetro.
Ordene a lista por notas de avaliação.
Imprima o item melhor avaliado da lista.

Dado de entrada da função:
[{
  titulo: "Um Sonho de Liberdade",
  notaAvaliacao: 9.2,
  duracao: 142,
  anoPublicacao: 1994,
  categoria: "Drama"
},
{
  titulo: "Clube da Luta",
  notaAvaliacao: 8.7,
  duracao: 139,
  anoPublicacao: 1999,
  categoria: "Drama"
},
{
  titulo: "Toy Story 3",
  notaAvaliacao: 8.3,
  duracao: 103,
  anoPublicacao: 2010,
  categoria: "Animação"
}]

Valor exibido pela função:
O filme de melhor avaliação com nota 9.2 é: Um Sonho de Liberdade.
*/


function ordenaAvaliacao(listaFilmes){
    listaFilmes.sort((a,b)=>(a.notaAvaliacao-b.notaAvaliacao));
    ultimoFilmeIndex = listaFilmes.length - 1;
    ultimoFilme = listaFilmes[ultimoFilmeIndex];
    console.log(`O filme de melhor avaliação com nota ${ultimoFilme.notaAvaliacao} é: ${ultimoFilme.titulo}.`);
}

let filmes = [{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }];

ordenaAvaliacao(filmes);