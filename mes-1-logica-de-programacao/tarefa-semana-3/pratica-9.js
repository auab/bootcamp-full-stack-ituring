/*
crie uma função no arquivo pratica-9.js que recebendo uma lista 
de depósitos e retiradas, exiba um resumo completo do extrato 
mensal de sua conta com as seguintes informações no exemplo 
abaixo. Para exibir, utilize o console.log() dentro da função.

Dado de entrada da função:

[100, -20, -30, 10, -7, -21, -5]
Saída esperada:

Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
*/

function calculaSaldo(transacoes){
    let totalDepositos = 0;
    let totalRetiradas = 0;
    let saldo = 0;
    let depositado = 0;
    let retirado = 0;
    transacoes.forEach(transacao => {
        saldo += transacao;
        if(transacao>=0){
            depositado+=transacao;
            totalDepositos += 1;
        }
            
        if(transacao<=0){
            retirado-=transacao;
            totalRetiradas += 1;
        }

    });
    console.log(`Total de depósitos: ${totalDepositos}`);
    console.log(`Total de retiradas: ${totalRetiradas}`);
    console.log(`O valor depositado foi de: R\$ ${depositado}`);
    console.log(`o valor retirado foi de R\$ ${retirado}`);
    console.log(`O saldo final da sua conta foi ${saldo > 0 ? 'positivo':'negativo'} no valor de R\$ ${saldo > 0 ? saldo:-saldo}`);
}

calculaSaldo([100, -20, -30, 10, -7, -21, -5]);