import { Mongoose } from 'mongoose';

export interface User extends Mongoose.Document {
  _id: string;
  email: string;
  password: string;
}
