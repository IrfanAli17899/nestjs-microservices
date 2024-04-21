import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
// import { ConfigModule } from '@libs/config';
import { MicroserviceModule } from '@lib/microservice';

@Module({
  imports: [MicroserviceModule],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
