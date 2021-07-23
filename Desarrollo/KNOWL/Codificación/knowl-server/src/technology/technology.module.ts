import { Module } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { TechnologyController } from './technology.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [TechnologyService],
  controllers: [TechnologyController],
  imports: [UserModule],
})
export class TechnologyModule {}
