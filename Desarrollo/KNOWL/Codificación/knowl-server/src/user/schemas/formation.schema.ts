import { Schema } from 'mongoose';
import { Collection } from 'src/enums';

export const formationSchema = new Schema({
  degree: {
    type: String,
    required: true,
    unique: true,
  },
  institution: {
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

formationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});
