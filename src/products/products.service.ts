import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCategoryService } from 'src/product-category/product-category.service';
import { Product } from 'typing';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('product') private readonly productModel: Model<Product>,
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const productCategory = await this.productCategoryService.findOne(
      createProductDto.productCategory,
    );

    if (!productCategory) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ProductCategory not found',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const product = new this.productModel(createProductDto);
    await product.save();
    return product;
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find({});
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
