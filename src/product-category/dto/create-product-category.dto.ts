import { IsNotEmpty } from 'class-validator';

export class CreateProductCategoryDto {
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  productCategoryName: string;

  @IsNotEmpty()
  discount: number;
}
