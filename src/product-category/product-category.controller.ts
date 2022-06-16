import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { ProductCategory } from 'typing'


@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  async create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return await this.productCategoryService.create(createProductCategoryDto);
  }

  @Get()
  async findAll(): Promise<ProductCategory[]> {
    return await this.productCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductCategory> {
    return await this.productCategoryService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductCategoryDto: UpdateProductCategoryDto) {
  //   return this.productCategoryService.update(+id, updateProductCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productCategoryService.remove(+id);
  // }
}
