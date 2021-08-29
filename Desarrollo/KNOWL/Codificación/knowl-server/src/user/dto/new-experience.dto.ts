import { IsNotEmpty, IsString } from 'class-validator';
import { RegisterError } from '../enums';

export class NewExperienceDto {
  @IsString({ message: RegisterError.FIRST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_FIRST_NAME, always: true })
  position: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  organization: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  description: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  user: string;
}
