// //Exemplo 1: Usuario e senha (AND)

// let usuario = "admin";
// let senha = 123;

// if (senha === 123 && usuario === "admin") {
//     console.log("seja bem vindo!");
// } else {
//     console.log("OPS! Senha inválida");
// }

// //Exemplo 2: Caixa eletrônico (OR)

// const valorTotal = 1000;
// const saque = 200;
// const bloqueada = false

// if (saque > valorTotal || bloqueada === true) {
//     console.log("operação inválida");
// } else {
//     console.log("operação concluída com sucesso, aguarde a contagem das notas");
// }

// //Exemplo 3: Else If

// const opcao = 1;

// if (opcao = 1) {
//     console.log("Você escolheu faltar com o operador!")
// } else if (opcao = 2) {
//     console.log("Você escolheu cancelar o seu cartão!")
// } else if (opcao = 3) {
//     console.log("Você escolheu escerrar o chat!")
// } else {
//     throw new Error("operação ínvalida")
// }

// //Exemplo 4: switch Case

// const username = "coord";

// switch (username) {
//     case "admin":
//         console.log("Bem Vindo adm");
//         break;
//     case "coord":
//         console.log("Olá coordenador!");
//         break;
//     default:
//         console.log("Bem Vindo!");
// }

// //Exemplo 5

// // ? Se(IF)    : Senão(ELSE)
// const idade = 10;

// // modo 1
// idade >= 18 ? console.log("Bem vindo!") : console.log("precisa da autorização dos pais!");

// //modo 2
// console.log(idade >= 18 ? "Bem vindo!" : "precisa da autorização dos pais!");

// //Exemplo 6

function validaIdade(idade) {
    if (idade >= 18) {
        return "bem vindo!"
    } 
        return "ops!"
    
}

console.log(validaIdade(1));