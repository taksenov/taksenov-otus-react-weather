/* eslint-disable indent */

import mongoose from 'mongoose';

export async function CreateDbConnection(host, port, db) {
  // Mongoose Global settings
  // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
  // by default, you need to set it to false.
  mongoose.set('useFindAndModify', false);

  // Connect to DB
  try {
    await mongoose.connect(`mongodb://${host}:${port}/${db}`, {
      useNewUrlParser: true,
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.log('MongoDB Connected ERROR:', error);
  }
}
