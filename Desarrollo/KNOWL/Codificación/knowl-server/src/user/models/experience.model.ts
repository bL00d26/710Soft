import { Document } from 'mongoose';

export interface Experience extends Document {
  position: string;
  organization: string;
  description: string;
  user: string;
}
