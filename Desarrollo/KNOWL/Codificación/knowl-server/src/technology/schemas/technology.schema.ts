import { Schema } from 'mongoose';

export const technologySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  image: {
    type: String,
    required: true,
  },
});

technologySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});
