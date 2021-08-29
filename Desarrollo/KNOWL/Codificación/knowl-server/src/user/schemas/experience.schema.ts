import { Schema } from 'mongoose';
import { Collection } from 'src/enums';

export const experienceSchema = new Schema({
  position: {
    type: String,
    required: true,
    unique: true,
  },
  organization: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collection.USER,
  },
});

experienceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});
