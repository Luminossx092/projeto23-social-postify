import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async addUser(user: CreateUserDto) {
    return await this.usersRepository.addUser({
      user,
    });
  }
}