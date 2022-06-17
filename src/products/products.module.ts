import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductCategoryModule } from 'src/product-category/product-category.module';

@Module({
  imports: [ProductCategoryModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
