import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { InjectMicroservice } from '@lib/microservice';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    @InjectMicroservice('USER') private readonly userService: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }
  @Get('/user')
  getUserHello(): Promise<string> {
    return this.userService
      .send<string>('echo', { message: '<h1>Calling User from Api</h1>' })
      .toPromise();
  }
}
