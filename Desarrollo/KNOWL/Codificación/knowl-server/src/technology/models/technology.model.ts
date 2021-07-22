import { Document } from 'mongoose';

export interface Technology extends Document {
  technology: string;
  description: string;
  image: string;
}
