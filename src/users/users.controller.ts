import { Body,  Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

  constructor(private usersService:UsersService){
  }

  @Post('/signup')
  createUser(@Body() body:CreateUserDto){
    this.usersService.create(body.name,body.email,body.password,body.role,
      body.state,
      body.city);
  }

  @Get('/:id')
  findOne(@Param('id') id:string){
    const user = this.usersService.findOne(parseInt(id));
    return user;
  }

  @Patch('/:id')
  update(@Param('id') id:string, @Body() body:UpdateUserDto ){
    return this.usersService.update(parseInt(id),body);
  }

  @Delete('/:id')
  remove(@Param('id') id:string){
    this.usersService.remove(parseInt(id));
  }

}
