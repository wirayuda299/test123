import mongoose from 'mongoose';

const meetupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  byWhome: { type: String, required: true },
  tags: {
    type: [String],
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
