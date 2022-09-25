// Tipos de Dados - Desafio

console.log("1. Desafio | String")
// (a) - Crie uma variável do tipo string que a posição 1 contenha a 
// letra “a”;
let desafio1 = "Vitor"
console.log("Substituir caracteres: " + desafio1.replace("i" , "a"))

console.log("2. Desafio | Number")
// (a) crie um string que possa ser transforma em um número inteiro e 
// use o método parseInt para converter para number;
let desafio2 = "3"
desafio2 = parseInt(desafio2) 
console.log(desafio2)
console.log(typeof desafio2)

console.log("3. Desafio Array")
// (a) Crie uma lista de frutas e coloque o nome de quantas frutas 
// quiser, depois use um dos métodos ensinados na aula para mostrar 
// no console a lista, seja o método filter para filtrar frutas 
// específicas, método find, para buscar uma fruta ou o método map; 
let frutas = ["banana", "pera", "morango"]
console.log("Filtar frutas específicas " + frutas.filter(fruta => fruta[0] == "m"))

console.log("4. Desafio Object")
// (a) crie um objeto chamado Carro que contenha chaves como: placa, 
// ano e cor;
let carro = {placa: "ABC323435", ano: 2002, cor: "Vermelho"}
console.log("Caracteristicas do carro:", carro)