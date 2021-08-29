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
import { Response } from 'express';

import { UserService } from './user.service';

import {
  ChangePasswordDto,
  EditUserDto,
  LoginUserDto,
  RegisterUserDto,
} from './dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { imageFileFilter } from '../utils';
import { JwtAuthGuard } from '../auth/guards';
import { ResponseError } from './enums';
import { ChangeRecoverPasswordDto } from './dto/change-recover-password.dto';
import { UserVerifyDto } from './dto/user-verify.dto';
import { NewFormationDto } from './dto/new-formation.dto';
import { NewExperienceDto } from './dto/new-experience.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/current')
  async getUserCurrent(@Req() req, @Res() res: Response) {
    const user = await this.userService.getUserCurrentDetail(req.user._id);
    res.json({
      success: true,
      user,
    });
  }

  @Post('/login')
  async loginUser(@Res() res: Response, @Body() loginUserDto: LoginUserDto) {
    const user = await this.userService.loginUser(loginUserDto);
    if (!user) throw new NotFoundException([ResponseError.LOGIN_ERROR]);
    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }

  @Post('/register')
  async registerUser(
    @Res() res: Response,
    @Body() registerUserDto: RegisterUserDto,
  ) {
    if (registerUserDto.password !== registerUserDto.repeatedPassword)
      throw new NotFoundException(['Contraseñas no coinciden']);
    const user = await this.userService.registerUser(registerUserDto);
    if (!user)
      throw new NotFoundException(['El correo ya se encuentra registrado']);

    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }
  // @UseGuards(JwtAuthGuard)
  @Post('/profile/:id')
  @UseInterceptors(
    FileInterceptor('profileImage', {
      storage: diskStorage({
        destination: './src/uploads/profileImages/',
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
    @Param('id') userId: string,
  ) {
    const user = await this.userService.updateUserProfileImg(userId);
    if (!user) return new NotFoundException(ResponseError.PHOTO_ERROR);
    res.status(HttpStatus.OK).json({
      success: true,
      profileImage: file.path,
    });
  }

  @Get('/profile/:id')
  getProfileImg(@Res() res: Response, @Param('id') profileId: string) {
    try {
      res.sendFile(
        join(process.cwd(), `/src/uploads/profileImages/${profileId}.png`),
        function(err) {
          res.status(HttpStatus.NOT_FOUND).end();
        },
      );
    } catch (error) {
      res.sendFile(null);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('/edit/password')
  async changePassword(
    @Res() res: Response,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    const newPassword = await this.userService.updateUserPassword(
      changePasswordDto,
    );
    if (!newPassword)
      throw new NotFoundException('Error al cambiar la contraseña');
    res.status(HttpStatus.OK).json({
      success: true,
    });
  }

  // @UseGuards(JwtAuthGuard)
  @Put('/edit/:id')
  async editUser(
    @Res() res: Response,
    @Param('id') userId: string,
    @Body() editUserDto: EditUserDto,
  ) {
    const user = await this.userService.editUser(userId, editUserDto);
    if (!user) throw new NotFoundException('User was not updated');
    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }

  @Put('/status/:id')
  async editStatus(
    @Res() res: Response,
    @Param('id') userId: string,
    @Body() status: { status: string },
  ) {
    const user = await this.userService.editStatus(userId, status);
    if (!user) throw new NotFoundException('User was not updated');
    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('/verify/:id')
  async verifyData(
    @Res() res: Response,
    @Param('id') userId: string,
    @Body() userVerifyDto: UserVerifyDto,
  ) {
    const user = await this.userService.userVerify(userId, userVerifyDto);
    if (!user)
      throw new NotFoundException(['Los datos ingresados son incorrectos']);
    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/id')
  async deteleUser(@Res() res: Response, @Param('id') userId: string) {
    const user = await this.userService.deleteUser(userId);
    if (!user) throw new NotFoundException('Error al eliminar usuario');
    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }

  @Get('/password/:email')
  async getPassword(@Res() res: Response, @Param('email') email: string) {
    const userPassword = await this.userService.getPassword(email);
    if (!userPassword)
      throw new NotFoundException('Error al recuperar contraseña');
    res.status(HttpStatus.OK).json({
      success: true,
      userPassword,
    });
  }
  @Get('/get/:id')
  async getUser(@Res() res: Response, @Param('id') id: string) {
    const user = await this.userService.getUser(id);
    if (!user) throw new NotFoundException('Error al recuperar usuario');
    res.status(HttpStatus.OK).json({
      success: true,
      user,
    });
  }

  @Get('/formation/:id')
  async getFormation(@Res() res: Response, @Param('id') userId: string) {
    const formation = await this.userService.getFormation(userId);
    if (!formation) throw new NotFoundException('Error al cargar formación');
    res.status(HttpStatus.OK).json({
      success: true,
      formation,
    });
  }
  @Get('/experience/:id')
  async getExperience(@Res() res: Response, @Param('id') userId: string) {
    const experience = await this.userService.getExperience(userId);
    if (!experience) throw new NotFoundException('Error al cargar experiencia');
    res.status(HttpStatus.OK).json({
      success: true,
      experience,
    });
  }

  @Get('/all')
  async getAllUsers(@Res() res: Response) {
    const users = await this.userService.getAllUsers();
    if (!users) throw new NotFoundException('Error al encontrar usuarios');
    res.status(HttpStatus.OK).json({
      success: true,
      users,
    });
  }

  @Put('/password/recover')
  async changeRecoverPassword(
    @Res() res: Response,
    @Body() changeRecoverPasswordDto: ChangeRecoverPasswordDto,
  ) {
    const changedUser = await this.userService.changeRecoverPassword(
      changeRecoverPasswordDto,
    );
    if (!changedUser)
      throw new NotFoundException('Error al cambiar la contraseña');
    res.status(HttpStatus.OK).json({
      success: true,
    });
  }

  @Post('/formation/new')
  async newFormation(
    @Res() res: Response,
    @Body() newFormationDto: NewFormationDto,
  ) {
    const formation = await this.userService.newFormation(newFormationDto);
    if (!formation)
      throw new NotFoundException(['El correo ya se encuentra registrado']);

    res.status(HttpStatus.OK).json({
      success: true,
      formation,
    });
  }
  @Post('/experience/new')
  async newExperience(
    @Res() res: Response,
    @Body() newExperienceDto: NewExperienceDto,
  ) {
    const experience = await this.userService.newExperience(newExperienceDto);
    if (!experience)
      throw new NotFoundException(['El correo ya se encuentra registrado']);

    res.status(HttpStatus.OK).json({
      success: true,
      experience,
    });
  }
}
