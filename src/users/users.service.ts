import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private repo:Repository<User>){
  }

  create(name:string,email:string,password:string,role:string,state:string,city:string){
    
    const user = this.repo.create({
      name,
      email,
      password,
      role,
      state,
      city
    });
    
    return this.repo.save(user);
  }

}
