/*
Aproveite o seu código da Prática 11 e crie uma função no arquivo pratica-12.js que recebendo uma lista de depósitos e retiradas, exiba um resumo completo do extrato de sua conta com as seguintes informações no exemplo abaixo.

Dado de entrada da função:

[{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]
Valor exibido pela função:

Total de depósitos: 2
Total de retiradas: 5
O valor total depositado foi de: R$ 110
O valor total retirado foi de: R$ 83
O saldo final de sua conta foi positivo no valor de R$ 27
Teste o seu código, veja se está funcionando de acordo com o exemplo, e depois faça o commit e suba ele no seu GitHub.
*/


let transacoesExemplo = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }];
  
  
  function computaSaldo(transacoes){
    let saldoFinal = 0;
    let depositoFinal = 0;
    let retiradaFinal = 0;
    let numeroDepositos = 0;
    let numeroRetiradas = 0;
    transacoes.forEach(transacao=>{
        if (transacao.movimentacao === 'deposito'){
          saldoFinal += transacao.valor;
          depositoFinal += transacao.valor;
          numeroDepositos++;
        }
  
        else{
          saldoFinal -= transacao.valor;
          retiradaFinal += transacao.valor;
          numeroRetiradas++;
        }
    })
    console.log(`Total de depósitos: ${numeroDepositos}`);
    console.log(`Total de retiradas: ${numeroRetiradas}`);
    console.log(`O valor total depositado foi de: R\$ ${depositoFinal}`);
    console.log(`O valor total retirado foi de: R\$ ${retiradaFinal}`);
    console.log(`O saldo final da sua conta foi ${saldoFinal > 0 ? 'positivo':'negativo'} no valor de R\$ ${saldoFinal > 0 ? saldoFinal:-saldoFinal}`);
    
  }
  
  computaSaldo(transacoesExemplo);