/*
Crie uma função no arquivo pratica-5.js que recebendo 
como argumento uma lista de seriados e o seriado que 
esteja querendo pesquisar, retorne a posição que se 
encontra o seriado. Caso não tenha encontrado o 
seriado, retorne undefined. Veja um exemplo abaixo.
*/

function encontraSeriado(listaSeriados,seriado){
    for(i=0;i<listaSeriados.length;i++){
        if (seriado===listaSeriados[i])
            return i;
    }
    return undefined;
}

console.log(encontraSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"));

console.log(encontraSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends"));