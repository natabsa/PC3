import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        name: String,
        cpf: String,
        password: String,
        birthday: Date,
        phone: String,
        address: String,
        adimin: Boolean,
        patient: [Patient],
        login: String,
        password: String
    }
);
/*employeeSchema.methods.age = () =>
{
    
};
employeeSchema.methods.dailyReport = () =>
{
    
};*/
export const Employee = mongoose.model('Employee', employeeSchema);    
