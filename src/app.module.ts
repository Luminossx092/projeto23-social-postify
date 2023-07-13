import { Module } from '@nestjs/common';
import { PublicationModule } from './publication/publication.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PublicationModule, AuthModule],
})
export class AppModule {}
