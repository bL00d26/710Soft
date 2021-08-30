import { IsNotEmpty } from 'class-validator';
import { UserDtoError } from 'src/user/enums';

export class TechnologyDto {
  @IsNotEmpty({ message: UserDtoError.USER_ID, always: true })
  name: string;

  @IsNotEmpty({ message: UserDtoError.USER_ID, always: true })
  image: string;
}
