/*
Crie uma função no arquivo que recebendo como argumento 
uma lista de depósitos e retiradas como no exemplo abaixo, 
exiba o saldo final da conta via console.log() dentro da função.
*/

function calculaSaldo(transacoes){
    let saldo = 0;
    transacoes.forEach(transacao => {
        saldo += transacao;
    });
    console.log(`O saldo final da sua conta foi ${saldo > 0 ? 'positivo':'negativo'} no valor de R\$ ${saldo > 0 ? saldo:-saldo}`);
}

calculaSaldo([100, -20, -30, 10, -7, -21, -5]);