import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//creer un chemin app/hello
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
