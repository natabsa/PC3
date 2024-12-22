import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
        name: String,
        birthday: String,
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
const Patient = mongoose.model('Patient', patientSchema);
export default Patient;