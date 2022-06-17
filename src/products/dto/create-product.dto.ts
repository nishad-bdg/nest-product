import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  productCategory: string;

  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  productDetail: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  discount: number;
}
