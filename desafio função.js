// Laços de Repetição | Desafio
// Mariana conta...
// Talvez você já tenha escutado aquela famosa música infantil, mariana conta 
// 1, mariana conta 2, ... O nosso desafio vai fluir nesse contexto, crie uma 
// função que receba um número e dentro dessa função crie um laço de 
// repetição que imprima no console mariana conta 1, e daí por diante até 
// chegar no número que o usuário preencheu.
// A contagem deve começar pelo número 1;
// Caso o número selecionado seja zero deve imprimir algum erro;
// Números decimais devem ser transformados em inteiros;

//FOR -----------------
/**
 * 
 * @param {number} n1 Número de laços (Até quando a Mariana vai contar).
 */
function marianaConta(n1) { 
    if (n1 === 0) {
        console.log("0 não é um número válido.") 
    } else {
        console.log("Mariana vai contar até:",Math.trunc(n1))
        for (let index = 1; index <= n1; index ++) { 
                console.log("Mariana conta",index)
        }      
    }
}

marianaConta(5)



// WHILE: --------------

/**
 * 
 * @param {number} n1 Número de laços (Até quando a Mariana vai contar).
 */
function marianaConta(n1) { 
    if (n1 === 0) {
        console.log("0 não é um número válido.") 
    } else {
        console.log("Mariana vai contar até:",Math.trunc(n1))
        let index = 1
        while (index <= n1) { 
            console.log("Mariana conta",index)
            index ++
        }      
    }
}

marianaConta(3)

