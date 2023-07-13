import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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

  async findByTitle(title) {
    return await this.prisma.publication.findFirst({
      where: {
        title
      }
    })
  }

  async findAll() {
    return await this.prisma.publication.findMany();
  }
}