import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';

@Controller()
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) { }

  @UseGuards(AuthGuard)
  @Post('publication')
  createPublication(@Body() createPublicationDto: CreatePublicationDto, @Request() req) {
    const user = req.user;
    return this.publicationService.create({ ...createPublicationDto, userId: user.id });
  }

  @UseGuards(AuthGuard)
  @Get('publications')
  findAll() {
    return this.publicationService.findAll();
  }
}
