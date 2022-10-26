/*
Recebendo como argumento uma lista de seriados e 
um termo de pesquisa, retorne uma lista com todos 
os seriados que possuem aquele termo
*/


function encontrarSubstringSeriados(listaSeriados, trecho){
    return listaSeriados.filter((seriado)=>seriado.includes(trecho));
}


console.log(encontrarSubstringSeriados(["Breaking Bad", "Game of Thrones",
 "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th"));