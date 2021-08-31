import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext) {
    const headers = context['args'][0].headers;
    const accessToken = headers['access-token'];
    this.validateAccessToken(accessToken);
    try {
      const result = (await super.canActivate(context)) as boolean;
      return result;
    } catch (error) {
      throw new UnauthorizedException('Access-Token Invalido');
    }
  }

  validateAccessToken(accessToken: string) {
    if (!accessToken || accessToken === '') {
      throw new UnauthorizedException('Access-Token requerido');
    }
  }
}
