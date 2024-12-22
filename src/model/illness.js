import mongoose from 'mongoose';

const illnessSchema = new mongoose.Schema(
    {
        name: String,
        desc: String
    }
);
const Illness = mongoose.model('Illness', illnessSchema);
export default Illness;
