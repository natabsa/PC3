const mongoose = require('mongoose');


const Illness = new mongoose.Schema(
    {
        name: String,
        desc: String
    }
);


const Patient = new mongoose.Schema(
    {
        name: String,
        birthday: String,
        //idade: function ???
        cpf: String,
        responsiblePhone: String,
        responsibleName: String,
        responsibleAddress: String,
        alergy: [String],
        illness: [Illness]
    }
);

const Activity = new mongoose.Schema(
    {
          name: String,
          start: String,
          end: String,
          done: Boolean
    }
);

const Employee = new mongoose.Schema(
    {
        name: String,
        cpf: String,
        password: String,
        birthday: String,
        phone: String,
        address: String,
        adimin: Boolean,
        patient: [Patient],
        login: String,
        //relatorio: function ???
        password: String
    }
);

module.exports = mongoose.model('User', UserSchema);