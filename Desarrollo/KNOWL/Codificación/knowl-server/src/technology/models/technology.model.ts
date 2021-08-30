import { Document } from 'mongoose';

export interface Technology extends Document {
  name: string;
  image: string;
}
