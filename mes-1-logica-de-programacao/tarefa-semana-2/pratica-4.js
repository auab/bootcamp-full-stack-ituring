/*
Nesta prática, você vai criar uma função no arquivo pratica-4.js 
que calcula a quantidade de desconto para um produto. A função 
deverá receber 2 parâmetros:

Valor do produto em reais

Porcentagem de desconto sobre o produto de 0 a 100, sendo 0 
significando 0% de desconto e 100 representando 100% de desconto
O retorno da função deverá ser o valor que deverá ser pago com o 
desconto aplicado. Então, considerando que o valor do produto foi 
100 e o desconto de 10%, então o retorno deverá ser 90
*/
function aplicarDesconto(precoCheio, desconto){
    return precoCheio*(100-desconto)/100;
}

console.log(aplicarDesconto(100,10));