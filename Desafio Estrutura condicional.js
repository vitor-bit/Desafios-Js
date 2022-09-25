// Essa função recebe os seguintes parâmetros numero1, numero2 e 
// operacao; 
// 2.
// Dentro da função deve existir a seguintes condições3.
// operacao === soma
// operacao === subtracao
// operacao === divisao
// operacao === multiplicacao
// Logo em seguida cada condição deve tratar sua operação, exemplo:4.
//  SE operacao === soma ENTÃO numero 1 + numero 2 
/**
 * 
 * @param {number} n1 Primeiro valor da opreração
 * @param {number} n2 segundo valor da opreração
 * @param {string} operacao O nome da operação desejada EX.("soma")
 */
function calculadora(n1, n2, operacao) {
    switch(operacao) {
        case "soma" : console.log("Essa é a soma dos dois valores:",n1 + n2) 
            break;

        case "subtração" : console.log("Essa é a subtração dos dois valores:",n1 - n2) 
            break;

        case "divisão" : console.log("Essa é a divisão dos dois valores:",n1 / n2) 
            break;
    
        case "multiplicação" : console.log("Essa é a multiplicação dos dois valores:",n1 * n2) 
            break;

        default:
            throw new Error("operação ínvalida")
}
}

calculadora(10,10, "soma")
calculadora(10,5, "subtração")
calculadora(10,5, "divisão")
calculadora(10,5, "multiplicação")
calculadora(10,5, "error")