import { IsNotEmpty } from 'class-validator';
import { UserDtoError } from '../enums/dto-errors.enum';

export class ChangePasswordDto {
  @IsNotEmpty({ message: UserDtoError.NEW_PASSWORD, always: true })
  userId: string;

  @IsNotEmpty({ message: UserDtoError.NEW_PASSWORD, always: true })
  newPassword: string;

  @IsNotEmpty({ message: UserDtoError.OLD_PASSWORD, always: true })
  oldPassword: string;
}
