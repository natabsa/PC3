import mongoose from 'mongoose';

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
const Employee = mongoose.model('Employee', employeeSchema);    
export default Employee;
