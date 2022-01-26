import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    //remplace base de donnée
    private users: User[]= [
        {id:0, name:"samira"},
        {id:0, name:"sam"},
        {id:0, name:"amelia"}
    ];
    findAll(name?:string): User[]{
       if(name){
           return this.users.filter((user)=>user.name===name)
       }
        return this.users
    }
    findById(userId: number): User{
        return this.users.find(user => user.id===userId)
    }
    createUser(createUserDto: CreateUserDto): User{
    const newUser={id:Date.now(), ...createUserDto} 
    this.users.push(newUser)
     return newUser
    }
}
