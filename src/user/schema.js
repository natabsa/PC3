const mongoose = require('mongoose');

await mongoose.connect(process.env.DBUSERPWD);

const illnessSchema = new mongoose.Schema(
    {
        name: String,
        desc: String
    }
);
export const Illness = mongoose.model('Illness', illnessSchema);

const patientSchema = new mongoose.Schema(
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
patientSchema.methods.age = () =>
{

};
export const Patient = mongoose.model('Patient', patientSchema);

const activitySchema = new mongoose.Schema(
    {
          name: String,
          start: String,
          end: String,
          done: Boolean
    }
);
export const Activity = mongoose.model('Activity', activitySchema);

const employeeSchema = new mongoose.Schema(
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
        password: String
    }
);
employeeSchema.methods.age = () =>
{
    
};
employeeSchema.methods.dailyReport = () =>
{
    
};
export const Employee = mongoose.model('Employee', employeeSchema);    
