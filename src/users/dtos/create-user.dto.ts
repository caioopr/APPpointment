import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto{
  
  @IsString()
  name:string;
  
  @IsEmail()
  email:string;

  @IsString()
  password: string;

  @IsString()
  role:string;

  @IsString()
  state:string;
  
  @IsString()
  city:string;
}