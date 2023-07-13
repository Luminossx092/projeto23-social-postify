import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./repository/user.repository";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async addUser(user: CreateUserDto) {
    const email = await this.usersRepository.findUserByEmail(user.email);
    if (email) throw new HttpException('Email already exists', HttpStatus.CONFLICT);

    const hashPassword = bcrypt.hashSync(user.password, 10);

    return await this.usersRepository.addUser({ ...user,
      password: hashPassword,});
  }

  async findUserById(id: string) {
    const user = await this.usersRepository.findUserById(Number(id));
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}