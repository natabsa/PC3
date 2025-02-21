import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    cpf: String,
    birthday: Date,
    phone: String,
    address: String,
    adimin: Boolean,
    patient: [mongoose.Types.ObjectId],
    login: String,
    password: String,
});
/*employeeSchema.methods.age = () =>
{
    
};
employeeSchema.methods.dailyReport = () =>
{
    
};*/
const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
