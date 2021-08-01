import mongoose from 'mongoose';

export const { Schema } = mongoose;

const favouriteSchema = new Schema({
  cityID: { type: Number },
  date: { type: Date },
  name: { type: String },
  temperature: { type: String },
  feelsLike: { type: String },
  pressure: { type: String },
  humidity: { type: String },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Favourite = mongoose.model('Favourite', favouriteSchema);
