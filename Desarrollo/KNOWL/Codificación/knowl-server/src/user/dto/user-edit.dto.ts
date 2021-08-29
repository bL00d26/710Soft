import { IsNotEmpty, IsOptional } from 'class-validator';
import { UserDtoError } from '../enums/dto-errors.enum';

export class EditUserDto {
  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.FIRST_NAME, always: true })
  firstName?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.LAST_NAME, always: true })
  lastName?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.EMAIL, always: true })
  ocupation?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.EMAIL, always: true })
  birthday?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.EMAIL, always: true })
  country?: string;

  @IsOptional()
  @IsNotEmpty({ message: UserDtoError.EMAIL, always: true })
  city?: string;
}
