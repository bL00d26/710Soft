import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection } from 'src/enums';
import { experienceSchema, formationSchema, userSchema } from './schemas';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
  imports: [
    MongooseModule.forFeature([{ name: Collection.USER, schema: userSchema }]),
    MongooseModule.forFeature([
      { name: Collection.FORMATION, schema: formationSchema },
    ]),
    MongooseModule.forFeature([
      { name: Collection.EXPERIENCE, schema: experienceSchema },
    ]),
  ],
})
export class UserModule {}
