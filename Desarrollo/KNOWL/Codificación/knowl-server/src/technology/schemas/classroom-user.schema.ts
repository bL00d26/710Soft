import { Schema } from 'mongoose';
import { Collection } from 'src/enums';

export const technologyUserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collection.USER,
  },
  technology: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Collection.TECHNOLOGY,
  },
});

technologyUserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});
