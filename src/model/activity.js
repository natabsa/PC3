import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
    {
          name: String,
          start: String,
          end: String,
          done: Boolean
    }
);
export const Activity = mongoose.model('Activity', activitySchema);
