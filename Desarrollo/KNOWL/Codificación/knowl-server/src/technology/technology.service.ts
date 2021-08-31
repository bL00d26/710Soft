import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Collection, Field } from 'src/enums';
import { Technology } from './models';
@Injectable()
export class TechnologyService {
  constructor(
    @InjectModel(Collection.TECHNOLOGY)
    private readonly technologyModel: Model<Technology>,
  ) {}

  async updateTechnologyImage(technologyId: string) {
    try {
      const newTechnology = await this.technologyModel.findByIdAndUpdate(
        technologyId,
        {
          image: `http://localhost:3001/users/profile/${technologyId}`,
        },
        { new: true },
      );

      return newTechnology;
    } catch (error) {
      return null;
    }
  }
}
