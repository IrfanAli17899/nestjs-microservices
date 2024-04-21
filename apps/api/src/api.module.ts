import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { MicroserviceModule } from '@lib/microservice';

@Module({
  imports: [MicroserviceModule.registerMicroservices(['USER'])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
