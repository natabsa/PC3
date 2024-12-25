import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
        name: String,
        birthday: Date,
        cpf: String,
        responsiblePhone: String,
        responsibleName: String,
        responsibleAddress: String,
        alergy: [String],
        illnesses: [{
            illness: {
                type: SchemaTypes.ObjectId,
                ref: 'Illness'
            }
        }]
    }
);
patientSchema.methods.age = () =>
{

};
const Patient = mongoose.model('Patient', patientSchema);
export default Patient;