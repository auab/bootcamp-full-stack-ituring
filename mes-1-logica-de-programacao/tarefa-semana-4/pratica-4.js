/*
Escreva uma função que recebendo uma lista com valores 
do tipo number, retorne uma lista com a raiz quadrada de 
cada um dos elementos.
*/

function computaRaizQuadrada(lista){
    return lista.map((numero) => Math.sqrt(numero));
}

console.log(computaRaizQuadrada([4, 9, 16, 25, 36, 49]));
