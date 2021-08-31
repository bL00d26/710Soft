import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { passwordMinLength, RegisterError } from '../enums';

export class RegisterUserDto {
  @IsEmail({}, { message: RegisterError.EMAIL, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_EMAIL, always: true })
  email: string;

  @MinLength(passwordMinLength, {
    always: true,
    message: RegisterError.PASSWORD_LENGTH,
  })
  password: string;

  @MinLength(passwordMinLength, {
    always: true,
    message: RegisterError.PASSWORD_LENGTH,
  })
  repeatedPassword: string;

  @IsString({ message: RegisterError.FIRST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_FIRST_NAME, always: true })
  firstName: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  lastName: string;

  @IsString({ message: RegisterError.LAST_NAME, always: true })
  @IsNotEmpty({ message: RegisterError.EMPTY_LAST_NAME, always: true })
  birthday: string;
}
