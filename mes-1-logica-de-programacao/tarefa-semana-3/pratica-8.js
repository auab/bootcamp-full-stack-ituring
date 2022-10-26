/*
crie uma função no arquivo que recebendo uma lista de depósitos
 e retiradas, exiba o resumo do extrato mensal de sua conta com
  as seguintes informações no exemplo abaixo. Para exibir, 
  utilize o console.log() dentro da função.

Dado de entrada da função:

[100, -20, -30, 10, -7, -21, -5]
Saída esperada:

O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
*/

function calculaSaldo(transacoes){
    let saldo = 0;
    let depositado = 0;
    let retirado = 0;
    transacoes.forEach(transacao => {
        saldo += transacao;
        if(transacao>=0)
            depositado+=transacao;
        if(transacao<=0)
            retirado-=transacao;
    });
    console.log(`O valor depositado foi de: R\$ ${depositado}`);
    console.log(`o valor retirado foi de R\$ ${retirado}`);
    console.log(`O saldo final da sua conta foi ${saldo > 0 ? 'positivo':'negativo'} no valor de R\$ ${saldo > 0 ? saldo:-saldo}`);
}

calculaSaldo([100, -20, -30, 10, -7, -21, -5]);