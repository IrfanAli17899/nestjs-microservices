import { Global, Module } from '@nestjs/common';
import { ConfigModule as EnvModule } from '@nestjs/config';
import { config } from './config';

@Module({
  imports: [EnvModule.forRoot({ load: [config], isGlobal: true })],
})
@Global()
export class ConfigModule {}
