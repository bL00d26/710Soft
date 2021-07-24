import { Module } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { TechnologyController } from './technology.controller';
import { UserModule } from 'src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection } from 'src/enums';
import { technologySchema } from './schemas';

@Module({
  providers: [TechnologyService],
  controllers: [TechnologyController],
  imports: [
    MongooseModule.forFeature([
      { name: Collection.TECHNOLOGY, schema: technologySchema },
    ]),
    UserModule,
  ],
})
export class TechnologyModule {}
