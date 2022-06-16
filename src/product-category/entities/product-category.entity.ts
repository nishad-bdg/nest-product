import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/entities/category.entity';

@Schema({ timestamps: true })
export class ProductCategory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ required: true })
  productCategoryName: string;

  @Prop({ required: true })
  discount: number;
}

export const ProductCategorySchema =
  SchemaFactory.createForClass(ProductCategory);
