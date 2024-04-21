import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, TcpOptions } from '@nestjs/microservices';
import { getMicroserviceConfig } from '@libs/config';

async function bootstrap() {
  const microserviceConfig = getMicroserviceConfig('USER') as TcpOptions;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: microserviceConfig.transport,
      options: {
        host: microserviceConfig.options.host,
        port: microserviceConfig.options.port,
      },
    },
  );
  await app.listen();
}
bootstrap();
