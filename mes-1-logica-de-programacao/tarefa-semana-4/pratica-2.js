/*
Crie uma função que recebendo como argumento uma 
lista de seriados e o seriado que esteja querendo 
pesquisar, retorne a posição que se encontra o seriado. 
Caso não tenha encontrado o seriado, retorne undefined."
*/

function encontraSeriado(listaSeriados,seriado){
    let indiceSeriado = undefined;
    listaSeriados.forEach((element,index) => {
        if(element==seriado)
            indiceSeriado = index;        
    });
    return indiceSeriado;
}

console.log(encontraSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Dexter"));

console.log(encontraSeriado(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Friends"));