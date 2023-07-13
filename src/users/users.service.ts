import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./repository/user.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async addUser(user: CreateUserDto) {
    return await this.usersRepository.addUser(user);
  }

  async findUserById(id: string) {
    const user = await this.usersRepository.findUserById(Number(id));
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}