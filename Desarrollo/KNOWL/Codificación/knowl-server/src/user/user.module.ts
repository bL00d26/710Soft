import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection } from '../enums';
import { userSchema } from './schemas';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
  imports: [
    MongooseModule.forFeature([{ name: Collection.USER, schema: userSchema }]),
  ],
})
export class UserModule {}
