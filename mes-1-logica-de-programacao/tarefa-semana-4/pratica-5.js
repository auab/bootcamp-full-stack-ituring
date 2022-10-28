/*
Escreva uma função no arquivo que, dado uma 
lista de números, retorne a lista em ordem 
crescente de valor.
*/

function ordenaValores(lista){
    return lista.sort((a,b)=>a-b);
}

console.log(ordenaValores([4, 9, 7, 1, 8, 12]));