/*
Crie uma função  que recebe como argumento uma lista de 
pessoas e exibe na tela os grupos formados com 2 pessoas. 
Utilize o console.log() dentro da função para exibir os 
grupos. Se faltar alguém, acrescente-a no último grupo. 
Veja abaixo um exemplo.

Dado de entrada da função:

["Anderson Luz", "Fabio Vechia", "Claudia Lopes", 
"Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]
Chamando a função:

suaFuncao(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", 
"Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"])

Valor exibido pela função:

Grupo 1: Anderson Luz, Fabio Vechia 
Grupo 2: Claudia Lopes, Rafael Alves
Grupo 3: Maria Mansano, Jairo Ferreira, Vitor Ribeiro
*/

function formaGrupos(listaAlunos){
    let ehPar = (listaAlunos.length%2==0 ? true : false);
    for (i=0;i < Math.floor(listaAlunos.length/2);i++){
        if((i===(Math.floor(listaAlunos.length/2)-1))& ehPar===false)
            console.log(`Grupo ${i+1}: ${listaAlunos[2*i]}, ${listaAlunos[2*i+1]}, ${listaAlunos[2*i+2]}`);
        else
            console.log(`Grupo ${i+1}: ${listaAlunos[2*i]}, ${listaAlunos[2*i+1]}`);
        
    }
}

formaGrupos(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", 
"Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]);