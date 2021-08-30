import { IsNotEmpty } from 'class-validator';
import { UserDtoError } from '../enums/dto-errors.enum';

export class TechnologyUserDto {
  @IsNotEmpty({ message: UserDtoError.USER_ID, always: true })
  technology: string;

  @IsNotEmpty({ message: UserDtoError.USER_ID, always: true })
  user: string;

  @IsNotEmpty({ message: UserDtoError.USER_ID, always: true })
  description: string;
}
