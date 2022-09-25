
//-----------------------EX 1 FUNÇÃO-----------------

// function Pessoa(id, nome){
//     return { id, nome}
// }

// const pessoa = Pessoa(0, "adimin")

// console.log(pessoa.nome)


//-----------------------EX 2 FUNÇÃO-------------------------

// var users = []

// function createUser(id, nome){
//     return users.push({ id, nome })
// }

// createUser(0, "adimin")
// createUser(1, "coordenador")

// function getUsersById(id) {
//     return users.find(user => user.id === id)
// }

// console.log(getUsersById(0))

//-------------------------------POO--------------------------------

class User {
    constructor() {
        this.users = []
    }

    createUser(id, name) {
        return this.users.push({ id, name})
    }

    getUserByid(id) {
        return this.users.find(user => user.id === id)
    }
}

const user = new User()

user.createUser(0, "adimin")
user.createUser(1, "coord")

console.log(user.getUserByid(1))

//------------------------Estatic--------------------

// var users = []

// class User {

//     static createUser(id, name) {
//         return users.push({ id, name})
//     }

//     static getUserByid(id) {
//         return users.find(user => user.id === id)
//     }
// }

// const user = User

// user.createUser(0, "adimin")
// user.createUser(1, "coord")

// console.log(user.getUserByid(1))





