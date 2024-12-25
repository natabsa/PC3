import mongoose from 'mongoose';

const illnessSchema = new mongoose.Schema(
    {
        name: String,
        desc: String
    }
);
export const Illness = mongoose.model('Illness', illnessSchema);
