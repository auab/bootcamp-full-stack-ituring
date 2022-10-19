/*
Crie uma função no arquivo pratica-9.js que receberá dois parâmetros 
(dois números) e o valor exibido na tela deverá ser o de maior valor. 
Por exemplo, passando 10 e 20 como parâmetros, o número 20 deverá ser 
o resultado obtido. Já passando 2 números iguais, você pode exibir 
qualquer um dos números
*/

function maximo(a,b){
    if(a>b)
        console.log(a);
    else
        console.log(b);
}

maximo(10,20);
maximo(3,2)