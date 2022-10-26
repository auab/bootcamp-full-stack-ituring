/*
Crie uma função que recebe como argumento uma lista de números que 
representam a contagem de visualizações de vídeos de um canal no 
Youtube. Retorne a lista com os números ordem crescente. Tente 
escrever um algoritmo de ordenação para resolver este problema. 
Se não conseguir de forma alguma, não se preocupe, pois é desafiante 
mesmo. Neste caso, tente utilizar o método de ordenação que já existe 
dentro da linguagem JavaScript.

Dado de entrada da função:

[10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]
Chamando a função:

suaFuncao([10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824])
Retorno (ou seja, utilize o comando return) esperado da função:

[10, 18, 32, 45, 45, 56, 98, 121, 123, 232, 1392824]
Teste o seu código, veja se está funcionando de acordo com o exemplo, 
e depois faça o commit e suba ele no seu GitHub.
*/

function ordenacao(lista){
    for(i=0;i<lista.length;i++){
        let valorMin = lista[i];
        for (j=i;j<lista.length-1;j++){
            if (lista[j]< valorMin){
                valorMin = lista[j];
                lista[j] = lista[i];
                lista[i] = valorMin;
            }
        }
    }
    return lista;
}

console.log(ordenacao([10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]));
