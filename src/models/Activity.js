import mongoose from 'mongoose';

const { Schema } = mongoose;

const activitySchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 20,
    require: true,
  },
  description: {
    type: String,
    minLength: 10,
    maxLength: 120,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Activity', activitySchema);
