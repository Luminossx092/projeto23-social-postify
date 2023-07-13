import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { UsersService } from "./../users/users.service";
import * as bcrypt from "bcrypt";
import { AuthSignupDTO } from "./dto/auth-signup.dto";
import { AuthSigninDTO } from "./dto/auth-signin.dto";
import { UsersRepository } from "src/users/repository/user.repository";

@Injectable()
export class AuthService {

  private ISSUER = "Social Postify";
  private AUDIENCE = "users";

  constructor(
    private jwtService: JwtService,
    private userRepository: UsersRepository,
    private usersService: UsersService
  ) { }

  async signup(body: AuthSignupDTO) {
    const user = await this.usersService.addUser(body);
    return this.createToken(user);
  }

  async signin({ email, password }: AuthSigninDTO) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Email or password invalid');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) throw new UnauthorizedException('Email or password invalid');

    return this.createToken(user);
  }

  createToken(user: User) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '7 days',
        subject: String(user.id),
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      },
    );

    return { token };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}