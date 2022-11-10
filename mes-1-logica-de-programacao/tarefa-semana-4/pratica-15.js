/*
Crie uma função no arquivo pratica-15.js que recebe uma lista
 de motoristas com os dados de cada veículo e o tempo estimado 
 até o cliente (em minutos).
*/


let listaMotoristas = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
  },
  {
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
  },
  {
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
  }];


function imprimeMotoristaRapido(listaMotoristas){
    let viagemRapida =  listaMotoristas.sort((a,b)=>a.tempoEstimado-b.tempoEstimado)[0];
    console.log(`${viagemRapida.motorista} está a caminho com o carro ${viagemRapida.veiculo} de placa ${viagemRapida.placa}. Chega em ${viagemRapida.tempoEstimado} minutos`);
};

imprimeMotoristaRapido(listaMotoristas);