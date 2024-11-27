const mongoose = require('mongoose');

const Paciente = new mongoose.Schema(
    {
        nome: String,
        dataNasciemtno: String,
        cpf: String,
        telResponsavel: String,
        alergia: [String],
        doenca: [String]
    }
);

const Atividade = new mongoose.Schema(
    {
          desc: String,
          email: String,
          password: String
    }
);

const Funcionario = new mongoose.Schema(
    {
          nome: String,
          email: String,
          password: String
    }
);

module.exports = mongoose.model('User', UserSchema);