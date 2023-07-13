import { Module } from '@nestjs/common';
import { PublicationModule } from './publication/publication.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PublicationModule, AuthModule, UsersModule],
})
export class AppModule {}
