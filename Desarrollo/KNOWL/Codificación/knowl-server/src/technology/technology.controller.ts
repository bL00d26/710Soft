import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  Param,
  HttpStatus,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards';
import { TechnologyDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { ResponseError } from './enums';
import { imageFileFilter } from '../utils';
import { Response } from 'express';
import { TechnologyService } from './technology.service';
import { TechnologyUserDto } from './dto/technology-user.dto';

@Controller('technology')
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {}

  @Post('/new')
  async newTechnology(
    @Res() res: Response,
    @Body() technologyDto: TechnologyDto,
  ) {
    const technology = await this.technologyService.newTechnology(
      technologyDto,
    );
    if (!technology)
      throw new NotFoundException(['El correo ya se encuentra registrado']);

    res.status(HttpStatus.OK).json({
      success: true,
      technology,
    });
  }
  @Post('/user/new')
  async newTechnologyUser(
    @Res() res: Response,
    @Body() technologyUserDto: TechnologyUserDto,
  ) {
    const technologyUser = await this.technologyService.newTechnologyUser(
      technologyUserDto,
    );
    if (!technologyUser)
      throw new NotFoundException(['El correo ya se encuentra registrado']);

    res.status(HttpStatus.OK).json({
      success: true,
      technologyUser,
    });
  }

  // @UseGuards(JwtAuthGuard)
  @Post('/image/:id')
  @UseInterceptors(
    FileInterceptor('technologyImage', {
      storage: diskStorage({
        destination: './src/uploads/technologyImages/',
        filename: (req, file, cb) => {
          cb(null, `${req.params.id}.png`);
        },
      }),
      fileFilter: imageFileFilter,
      limits: { files: 1, fileSize: 10000000 },
    }),
  )
  async setProfileImage(
    @Res() res: Response,
    @UploadedFile() file,
    @Param('id') technologyId: string,
  ) {
    const technology = await this.technologyService.updateTechnologyImage(
      technologyId,
    );
    if (!technology) return new NotFoundException(ResponseError.PHOTO_ERROR);
    res.status(HttpStatus.OK).json({
      success: true,
      image: file.path,
    });
  }

  @Get('/image/:id')
  getProfileImg(@Res() res: Response, @Param('id') technologyId: string) {
    try {
      res.sendFile(
        join(
          process.cwd(),
          `/src/uploads/technologyImages/${technologyId}.png`,
        ),
        function(err) {
          res.status(HttpStatus.NOT_FOUND).end();
        },
      );
    } catch (error) {
      res.sendFile(null);
    }
  }

  @Get('/')
  async getTechnologies(@Res() res: Response) {
    const technologies = await this.technologyService.getTechnologies();
    if (!technologies) throw new NotFoundException('Error al cargar formación');
    res.status(HttpStatus.OK).json({
      success: true,
      technologies,
    });
  }
  @Get('/:id')
  async getUserTechnologies(@Res() res: Response, @Param('id') userId: string) {
    const technologiesUser = await this.technologyService.getTechnologiesUser(
      userId,
    );
    if (!technologiesUser)
      throw new NotFoundException('Error al cargar formación');
    res.status(HttpStatus.OK).json({
      success: true,
      technologiesUser,
    });
  }
}
