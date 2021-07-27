import { Schema } from 'mongoose';

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  profileImage: {
    type: String,
    default: 'default',
    required: true,
  },
  ocupation: {
    type: String,
    default: ' ',
    required: true,
  },
  country: {
    type: String,
    default: ' ',
    required: true,
  },
  city: {
    type: String,
    default: ' ',
    required: true,
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});
