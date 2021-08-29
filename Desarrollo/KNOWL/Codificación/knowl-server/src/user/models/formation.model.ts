import { Document } from 'mongoose';

export interface Formation extends Document {
  degree: string;
  institution: string;
  description: string;
  user: string;
}
