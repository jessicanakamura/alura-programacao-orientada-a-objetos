import User from "./User.js";

export default class Admim extends User {
    constructor(nome, email, nascimento, role = 'admim', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}
