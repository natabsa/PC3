const mongoose = require('mongoose');


const Doenca = new mongoose.Schema(
    {
        nome: String,
        descricao: String
    }
);


const Paciente = new mongoose.Schema(
    {
        nome: String,
        dataNasciemtno: String,
        //idade: function ???
        cpf: String,
        telResponsavel: String,
        alergia: [String],
        doenca: [Doenca]
    }
);

const Atividade = new mongoose.Schema(
    {
          atividade: String,
          comeco: String,
          termino: String,
          realizada: Boolean
    }
);

const Funcionario = new mongoose.Schema(
    {
        nome: String,
        cpf: String,
        password: String,
        dataNascimento: String,
        //idade: function ???
        telefone: String,
        endereco: String,
        adm: Boolean,
        paciente: [Paciente],
        login: String,
        //relatorio: function ???
        password: String
    }
);

module.exports = mongoose.model('User', UserSchema);