import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { passwordMinLength, RegisterError } from '../enums';

export class NewFormationDto {
  @IsString({ message: RegisterError.FIRST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_FIRST_NAME, always: true })
  degree: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  institution: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  description: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  user: string;
}
