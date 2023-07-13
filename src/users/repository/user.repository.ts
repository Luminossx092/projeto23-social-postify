import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDto) {
    return await this.prisma.user.create({ data: data });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany({});
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: number) {
    return await this.prisma.user.findFirst({ where: { id } });
  }
}