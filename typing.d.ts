import { Mongoose } from 'mongoose';

export interface User extends Mongoose.Document {
  _id: string;
  email: string;
  password?: string;
}

export interface Category extends Mongoose.Document {
  _id: string;
  categoryName: string;
  discount: number;
}

export interface AccessToken {
  access_token: string;
}

export interface ProductCategory extends Mongoose.Document {
  _id: string;
  category: string;
  productCategoryName: string;
  discount: number;
}
