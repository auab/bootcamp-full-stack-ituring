/*
Em uma contagem de votos para os preferidos para ganhar 
a próxima Copa do Mundo de futebol, foi feita uma votação 
por meio de códigos que obedecem as seguintes regras:

Código 1: Brasil
Código 2: Argentina
Código 3: Espanha
Código 4: Portugal

Os votos foram computados e registrados em uma lista.
Agora eles precisam de uma pessoa que saiba programar 
para computar o resultado. Ou seja, de você!

Por isso, crie uma função  que recebendo como argumento 
uma lista de votos, exiba na tela quantos votos recebeu 
cada país com base no código acima. Para exibir, utilize 
o console.log() dentro da função.

Dados de entrada da função:

[1, 1, 1, 4, 4, 2, 3, 2]
Chamando a função:

suaFuncao([1, 1, 1, 4, 4, 2, 3, 2])
Valor exibido pela função:

Brasil: 3 voto(s)
Argentina: 2 voto(s)
Espanha: 1 voto(s)
Portugal: 2 voto(s)

Resultado:
Brasil é o preferido para ganhar a Copa do Mundo!
*/

const listaPaises = ['Brasil','Argentina','Espanha','Portugal'];

function computaVotacao(listaVotacao){
    let resultadoVotacao = [0,0,0,0];
    let indiceVoto = 0;
    for (i=0;i<listaVotacao.length;i++){
        indiceVoto = listaVotacao[i]-1;
        resultadoVotacao[indiceVoto] += 1;
    }

    let maxVotos = 0;
    let maxIndice = -1;
    for (i=0;i<resultadoVotacao.length;i++){
        console.log(`${listaPaises[i]}: ${resultadoVotacao[i]} voto(s)`);
        if (resultadoVotacao[i]>maxVotos){
            maxVotos = resultadoVotacao[i];
            maxIndice = i;
        }
    }
    console.log('\nResultado:');
    console.log(`${listaPaises[maxIndice]} é o preferido para ganhar a Copa do Mundo!`);
    
}

computaVotacao([1, 1, 1, 4, 4, 2, 3, 2]);
