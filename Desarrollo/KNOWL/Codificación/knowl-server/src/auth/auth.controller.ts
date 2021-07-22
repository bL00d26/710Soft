import {
  Body,
  Controller,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import { LoginUserDto } from 'src/user/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async signIn(@Req() req, @Body() loginUserDto: LoginUserDto, @Res() res) {
    const { user, accessToken } = await this.authService.login(loginUserDto);
    if (!user) {
      throw new InternalServerErrorException('Error al Iniciar Sesión');
    }
    res.status(HttpStatus.OK).json({
      success: true,
      user,
      accessToken,
    });
  }
}
