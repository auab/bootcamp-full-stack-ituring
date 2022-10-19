/*
Crie uma função no arquivo pratica-10.js que receberá 3 
parâmetros (3 números) e o valor exibido na tela deverá ser 
o de maior valor. Por exemplo, passando 30, 10 e 20 como 
parâmetros, o número 30 deverá ser o resultado obtido. Já 
passando 3 números iguais, você pode exibir qualquer um dos 
números
*/
function maximo3(a,b,c){
    if(a>b && a>c)
        console.log(a);
    else if(b>a && b>c)
        console.log(b);
    else    
        console.log(c);
}

maximo3(1,2,3);
maximo3(20,30,10);
maximo3(300,200,100);