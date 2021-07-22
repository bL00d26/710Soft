import { IsNotEmpty } from 'class-validator';
import { UserDtoError } from '../enums/dto-errors.enum';
export class ChangeRecoverPasswordDto {
  @IsNotEmpty({ message: UserDtoError.NEW_PASSWORD, always: true })
  password: string;

  @IsNotEmpty({ message: UserDtoError.NEW_PASSWORD, always: true })
  newPassword: string;
}
