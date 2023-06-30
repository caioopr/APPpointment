import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

  async findOne(id:number){

    if(!id){
      return null;
    }

    const user = await this.repo.findOneBy({id});

    return user;
  }

  

  async update(id:number, attributes: Partial<User>){
    const user = await this.repo.findOneBy({id});

    if(!user){
      throw new NotFoundException('User not found.');
    }

    Object.assign(user,attributes);

    return this.repo.save(user);

  }

  async remove(id:number){
    const user = await this.repo.findOneBy({id});
    if(!user){
      throw new NotFoundException('User not found.');
    }

    this.repo.remove(user);
  }

}
