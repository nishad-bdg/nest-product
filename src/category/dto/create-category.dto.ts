import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  categoryName: string;

  @IsNotEmpty()
  discount: number;
}
