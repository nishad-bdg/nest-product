import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryController } from './product-category.controller';
import { CategoryModule } from 'src/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategorySchema } from './entities/product-category.entity';

@Module({
  imports: [
    CategoryModule,
    MongooseModule.forFeature([
      { name: 'productCategory', schema: ProductCategorySchema },
    ]),
  ],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
  exports: [ProductCategoryService],
})
export class ProductCategoryModule {}
