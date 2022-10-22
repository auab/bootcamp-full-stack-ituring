/*
Crie uma função no arquivo pratica-4.js que recebendo como argumento 
uma lista de seriados quaiquer, exiba na tela cada um dos seriados com 
o índice de cada um na lista. Para exibir, utilize o console.log() 
dentro da função.

Dado de entrada da função:
["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

Chamando a função:
suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])

Valor exibido pela função:

[0] Breaking Bad
[1] Game of Thrones
[2] Stranger Things
[3] Chernobyl
[4] Dexter
[5] The Last Dance
[6] This is Us
*/

function mostraSeriados(listaSeriados){
    for(i=0; i<listaSeriados.length;i++)
    {
        console.log(`[${i}] ${listaSeriados[i]}`);
    }
}

mostraSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]);