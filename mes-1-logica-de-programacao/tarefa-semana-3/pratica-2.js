/*
Crie uma função no arquivo pratica-2.js que recebendo 
como argumento um número inteiro maior que zero, exiba 
com console.log() todos os números ímpares até chegar 
neste número. 
*/

function numeroImparesAte(numeroLimite){
    let i = 1
    while(i<=numeroLimite){
        console.log(i);
        i += 2;
    }
}

numeroImparesAte(19);