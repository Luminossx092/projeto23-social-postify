import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { PublicationRepository } from './repository/publication.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/repository/user.repository';

@Module({
  imports: [AuthModule],
  controllers: [PublicationController],
  providers: [PublicationService, PublicationRepository,PrismaService,UsersService,UsersRepository]
})
export class PublicationModule {}
