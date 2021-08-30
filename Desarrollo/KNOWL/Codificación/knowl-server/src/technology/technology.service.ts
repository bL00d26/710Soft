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
import { TechnologyDto } from './dto';
import { TechnologyUser } from './models/technology-user.model';
import { TechnologyUserDto } from './dto/technology-user.dto';
@Injectable()
export class TechnologyService {
  constructor(
    @InjectModel(Collection.TECHNOLOGY)
    private readonly technologyModel: Model<Technology>,
    @InjectModel(Collection.TECHNOLOGY_USER)
    private readonly technologyUserModel: Model<TechnologyUser>,
  ) {}

  async newTechnology(technologyDto: TechnologyDto) {
    try {
      const newTechnology = await new this.technologyModel(
        technologyDto,
      ).save();
      return newTechnology;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async newTechnologyUser(technologyUserDto: TechnologyUserDto) {
    try {
      const newTechnologyUser = await new this.technologyUserModel(
        technologyUserDto,
      ).save();
      return newTechnologyUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getTechnologies() {
    try {
      const technologies = await this.technologyModel.find();
      return technologies;
    } catch (error) {
      return null;
    }
  }
  async getTechnologiesUser(userId) {
    try {
      const technologiesUser = await this.technologyUserModel
        .find({ user: userId })
        .populate(Field.TECHNOLOGY, {}, Collection.TECHNOLOGY);
      return technologiesUser;
    } catch (error) {
      return null;
    }
  }

  async updateTechnologyImage(technologyId: string) {
    try {
      const newTechnology = await this.technologyModel.findByIdAndUpdate(
        technologyId,
        {
          image: `http://localhost:4000/technology/image/${technologyId}`,
        },
        { new: true },
      );

      return newTechnology;
    } catch (error) {
      return null;
    }
  }
}
