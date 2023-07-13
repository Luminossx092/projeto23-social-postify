import { HttpException, HttpStatus, Injectable, Request } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publication.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationsRepository: PublicationRepository) { }
  async create(data: PublicationToCreate) {
    const title = await this.publicationsRepository.findByTitle(data.title);
    if(title) throw new HttpException('Title already exists', HttpStatus.CONFLICT);

    const publication = await this.publicationsRepository.create(data);
    return publication;
  }

  findAll() {
    return `This action returns all publication`;
  }
}

type PublicationToCreate = CreatePublicationDto & {userId: number} ;
