import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ProductCategoryModule } from './product-category/product-category.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nishad:Nishad90zx@cluster0.wtjke.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
    CategoryModule,
    ProductCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
