import { Schema, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';

@Schema({ timestamps: true })
export class Product {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
  })
  productCategory: ProductCategory;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  productDetail: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  discount: number;
}
