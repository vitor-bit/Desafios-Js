
class Banco {
    constructor() {
        this.saldo
    }

    saldoUser(valorSalario) {
        this.saldo = valorSalario
        console.log("Valor do seu saldo: R$",this.saldo)
      
    }
    saqueUser(valorSaque){
        if (valorSaque > this.saldo){
            console.log("Você não pode sacar esse valor, pois seu saldo é de R$", this.saldo)
            return
        } else if (valorSaque === String){
            valorSaque = parseInt(valorSaque)
        }

        var saldoComSaque = this.saldo - valorSaque
        console.log("você sacou R$",valorSaque,", o valor do de seu saldo após o saque é de R$",saldoComSaque)
   
    }
}

const user = new Banco()

user.saldoUser(20000)
user.saqueUser(40)
