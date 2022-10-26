/*
Copie e cole em pratica-1.js o código do arquivo pratica-4.js
 da pasta tarefa-semana-3. Vamos utilizar o exercício da 
 Prática 4: Minha lista de seriados da semana anterior.

Relembrando o problema: "Crie uma função que recebendo 
como argumento uma lista de seriados quaiquer, exiba na tela cada 
um dos seriados com o índice de cada um na lista".

Agora, altere o código da solução e utilize o método .forEach.

Dado de entrada da função:

["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl"
, "Dexter", "The Last Dance", "This is Us"]
Chamando a função:

suaFuncao(["Breaking Bad", "Game of Thrones", "Stranger Things"
, "Chernobyl", "Dexter", "The Last Dance", "This is Us"])
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
    listaSeriados.forEach((seriado,index) =>{
        console.log(`[${index}] ${seriado}`);
    });
}

mostraSeriados(["Breaking Bad", "Game of Thrones", "Stranger Things", 
                "Chernobyl", "Dexter", "The Last Dance", "This is Us"]);