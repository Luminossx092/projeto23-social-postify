import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from './auth.controller';
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { UsersRepository } from "src/users/repository/user.repository";
import { UsersService } from "src/users/users.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET
  }), UsersModule],
  controllers: [AuthController],
  providers: [AuthService,UsersService,UsersRepository, PrismaService],
  exports: [AuthService]
})
export class AuthModule {

}