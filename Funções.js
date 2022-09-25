// // Funções - Desafios
// 1 - Função e variáveis
// // A- Crie uma função que leia 2 variáveis do tipo number fora de seu escopo e 
// // que retorne a soma das mesmas.
/**
 * 
 * @param {number} n1 primeiro número a ser somado
 * @param {number} n2 segundo número a ser somado
 * @returns {number} soma dos dois números 
 * 
 */
function  Soma (n1, n2) {
     return n1 + n2
}
 console.log(Soma1(10, 10))

// 2 - Função e Tipos de Dados
// // A - Crie uma função que receba uma string como parâmetro e retorne o 
// // mesmo parâmetro mas do tipo numérico. 
/**
 * 
 * @param {string} parametro String para ser convertida em Number
 */
function string(parametro) {
    let TipoNum = parametro
    string = TipoNum = parseInt(TipoNum)
    console.log(string)
    console.log(typeof TipoNum)
}
string("7")

// B - Crie uma função que receba a seguinte lista como parâmetro: 
// [“Júlia”, “Anna”, “Pedro”, “Rafael”, “Paula”] 1
//  Essa função deve retornar a mesma lista porém com um filter que só 
// retorne os nomes que começam com a letra “P”
/**
 * 
 * @param {string} Letra inserir a letra que dejesa filtrar os nomes na lista
 */
function Lista(Letra) {
    const Nomes = ["Júlia", "Anna", "Pedro", "Rafael", "Paula"]
    Lista = console.log("Nomes selecionados com a letra desejada: "
     + Nomes.filter(NomesP => NomesP[0] === Letra))    
}
Lista("P")

// 3 - Função e Operadores
// // A - Crie uma função que receba dois números e retorne a soma dos mesmos.
/**
 * 
 * @param {number} n1 primeiro número a ser somado
 * @param {number} n2 segundo número a ser somado
 * @returns {number} soma dos dois números
 */
function  Soma1(n1, n2){
    return  n1 + n2
}
console.log(Soma1(2, 2))

// B - Crie uma função que recebe dois números e retorne a multiplicação entre 
// eles 
/**
 * 
 * @param {number} n1 primeiro número a ser multiplicado
 * @param {number} n2 segundo número a ser multiplicado
 * @returns {number} resultado da multiplicação
 */
function  Mult(n1, n2){
    return  n1 * n2
}
console.log(Mult(2, 4))

// C - Crie uma função que receba dois números e retorne o módulo entre eles
/**
 * 
 * @param {number} n  Primeiro valor a ser calculado o valor absoluto
 * @param {number} n1 Segundo valor a ser calculado o valor absoluto
 * @returns {number} Valor absoluto, ou módulo entre os números digitados
 */
function ValorAb(n, n1){
    return n % n1
        
}
console.log("Valor absoluto, ou módulo entre os números:", ValorAb(7, 4))