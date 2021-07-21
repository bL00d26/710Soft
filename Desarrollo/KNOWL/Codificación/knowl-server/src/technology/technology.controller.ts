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

@Controller('technology')
export class TechnologyController {
  constructor(private technologyService: TechnologyService) {}

  @UseGuards(JwtAuthGuard)
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
}
