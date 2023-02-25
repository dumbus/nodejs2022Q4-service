import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('error/exception')
  testException() {
    throw new Error('Test Uncaught Exception');
  }

  @Get('error/reject')
  testReject() {
    Promise.reject('Test Unhandled Reject');
  }
}
