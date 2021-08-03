import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('access-token'),
      ignoreExpiration: false,
      secretOrKey: '123456',
    });
  }
  async validate(payload: any) {
    return payload.user;
  }
}
