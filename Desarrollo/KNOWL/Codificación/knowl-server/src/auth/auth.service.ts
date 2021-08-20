import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.getUserByEmail(loginUserDto);
    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);

    if (!user || !isMatch) {
      throw new UnauthorizedException('Email y/o contraseña incorrectos');
    }

    const accessToken = this.jwtService.sign({ user });
    return { user, accessToken };
  }
}
