/*
crie uma função no arquivo pratica-6.js que recebendo como 
rgumento uma lista de seriados e um termo de pesquisa, 
retorne uma lista com todos os seriados que possuem aquele termo.
*/

function encontrarSubstringSeriados(listaSeriados, trecho){
    let seriadosComTermo = [];
    for(i=0;i<listaSeriados.length;i++){
        if (listaSeriados[i].includes(trecho))
            seriadosComTermo.push(listaSeriados[i]);
    }
    return seriadosComTermo;
}

console.log(encontrarSubstringSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"));