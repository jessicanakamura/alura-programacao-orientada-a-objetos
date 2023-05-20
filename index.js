import User from "./User.js";
import Docente from "./Docente.js";
import Admim from "./Admim.js";

// const novoUser = new User('Mariana', 'm@m.com', '2021-01-01')
// console.log(novoUser.exibirInfos())

const novoAdmim = new Admim ('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmim.nome)
novoAdmim.nome = 'Andre'
console.log(novoAdmim.nome)