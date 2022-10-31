/*
Crie uma função no arquivo pratica-14.js que recebe
um objeto com a lista de avaliações de um restaurante, 
calcula a média de suas avaliações de acordo com a 
entrada de cada cliente e exibe a média de avaliação.
*/

let avaliacoesRestaurante = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

function mediaAvaliacoes(avaliacoesRestaurante){
    let avaliacoes = avaliacoesRestaurante.avaliacoes
    let somaNotas = 0;
    let mediaNotas = 0;
    avaliacoes.forEach(avaliacao => {
        somaNotas += avaliacao.nota;
    });
    mediaNotas = somaNotas/avaliacoes.length;
    console.log(`A média de avaliações do restaurante ${avaliacoesRestaurante.restaurante} foi de ${mediaNotas.toFixed(2)}`);
}

mediaAvaliacoes(avaliacoesRestaurante);