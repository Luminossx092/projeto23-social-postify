import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthSigninDTO {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}