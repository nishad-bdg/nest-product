import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nishad:Nishad90zx@cluster0.wtjke.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
