import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';

@Injectable()
export class PublicationRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(data) {
    return await this.prisma.publication.create({
      data: {
        ...data,
        dateToPublish: new Date(data.dateToPublish)
      }
    });
  }

  async findAllUsers() {
    return await this.prisma.publication.findMany();
  }
}