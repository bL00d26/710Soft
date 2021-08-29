import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: string;
  verified: boolean;
  profileImage: string;
  ocupation: string;
  country: string;
  city: string;
  status:string;
}
