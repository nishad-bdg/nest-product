import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, unique: true })
  categoryName: string;

  @Prop({ required: true })
  discount: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
