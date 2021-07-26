import { Document } from 'mongoose';
import { User } from 'src/user/models/user.model';
import { Technology } from './technology.model';

export interface ClassroomUser extends Document {
  technology: Technology | string;
  user: User | string;
}
