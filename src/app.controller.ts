import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/healthy')
  async healthy(): Promise<string> {
    const result = this.dbService.$queryRaw`SELECT 1`;
    return result ? 'OK' : 'NOT OK';
  }
}
