import { IsNotEmpty } from 'class-validator';
import { UserDtoError } from '../enums/dto-errors.enum';

export class UserVerifyDto {
  @IsNotEmpty({ message: UserDtoError.FIRST_NAME, always: true })
  ocupation: string;

  @IsNotEmpty({ message: UserDtoError.LAST_NAME, always: true })
  country: string;

  @IsNotEmpty({ message: UserDtoError.EMAIL, always: true })
  city: string;
}
