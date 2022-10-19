/*
Nesta prática, você irá recriar a prática 4 no 
arquivo pratica-5.js utilizando expressão de função
*/

let precoFinal = function(precoCheio, desconto){
    return precoCheio*(100-desconto)/100;
}

console.log(precoFinal(100,10));