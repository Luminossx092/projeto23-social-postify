import { Injectable, Request } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publication.repository';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { Publication, User } from '@prisma/client';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationsRepository: PublicationRepository) { }
  async create(data: PublicationToCreate) {
    const publication = await this.publicationsRepository.create(data);
    return publication;
  }

  findAll() {
    return `This action returns all publication`;
  }
}

type PublicationToCreate = Publication | { userId: number };
