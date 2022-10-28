/*
Para essa prática, crie uma função em pratica-6.js 
que recebe como argumento um objeto que tem informações 
de um filme e exibe o nome do filme o seu tempo de 
duração. O objeto deverá ter as seguintes propriedades:

Titulo (string)
Nota de avaliação (number)
Duração (number)
Ano de publicação (number)
Categoria (string)

Exemplo de dado de entrada da função:

Objeto que tem as seguintes informações de um filme:
- Título: "Estrelas Além do Tempo"
- Nota de avaliação: 7.8
- Duração: 127
- Ano de publicação: 2016
- Categoria: "Drama"

Chamando a função:
suaFuncao(seuObjetoAqui)

Valor exibido pela função:
O filme Estrelas Além do Tempo que estreou em 2016 tem a avaliação de 7.8 pelo IMDb.
*/

function apresentaInformacoesFilme(filme){
    console.log(`O filme ${filme.titulo} que estreou em ${filme.anoEstreia} tem a avaliação de ${filme.notaAvaliacao} pelo IMDb`);
}

let filmeExemplo = {
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoEstreia: 2016,
    categoria: "Drama"
}

apresentaInformacoesFilme(filmeExemplo);