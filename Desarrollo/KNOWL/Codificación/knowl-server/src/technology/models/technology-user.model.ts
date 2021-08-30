import { Document } from 'mongoose';
import { User } from 'src/user/models/user.model';
import { Technology } from './technology.model';

export interface TechnologyUser extends Document {
  technology: Technology | string;
  description: string;
  user: User | string;
}
