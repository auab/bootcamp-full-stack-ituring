/*
Dada as mesmas variáveis que você utilizou para a prática 1:

seu nome
seu email
sua profissão
sua idade
o lugar que você sonha um dia conhecer (pode ser um país, cidade ou 
um local mesmo)

Coloque-as no arquivo pratica-3.js e exiba o valor true com console.log() 
se a variável for do tipo string e false se a variável não for do tipo 
string.
*/
let firstName = "Pedro"
let email = "pedro.aurelio.abreu@gmail.com"
let occupation = "engenheiro"
let age = 28
let placeToKnow =  "Pantanal"

let nameType = typeof(firstName)
let emailType = typeof(email)
let occupationType = typeof(occupation)
let ageType = typeof(age)
let placeToKnowType = typeof(placeToKnow)

console.log((nameType)=="string")
console.log((emailType)=="string")
console.log((occupationType)=="string")
console.log((ageType)=="string")
console.log((placeToKnowType)=="string")