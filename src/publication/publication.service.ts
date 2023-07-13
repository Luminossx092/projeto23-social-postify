import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publication.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationsRepository: PublicationRepository) {}
  async create(createPublicationDto: CreatePublicationDto) {
    const publication = await this.publicationsRepository.create(createPublicationDto);
    return publication;
  }

  findAll() {
    return `This action returns all publication`;
  }
}
