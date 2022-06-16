import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from 'src/category/category.service';
import { ProductCategory } from 'typing';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel('productCategory')
    private readonly productCategoryModel: Model<ProductCategory>,
    private readonly categoryService: CategoryService,
  ) {}
  async create(createProductCategoryDto: CreateProductCategoryDto) {
    const category = await this.categoryService.getCategory(
      createProductCategoryDto.category,
    );
    if (!category) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    const newProductCategory = new this.productCategoryModel(
      createProductCategoryDto,
    );
    await newProductCategory.save();
    return newProductCategory;
  }

  async findAll(): Promise<ProductCategory[]> {
    return await this.productCategoryModel.find({});
  }

  async findOne(id: string): Promise<ProductCategory> {
    const productCategory = await this.productCategoryModel.findById(id);
    return productCategory;
  }
}
