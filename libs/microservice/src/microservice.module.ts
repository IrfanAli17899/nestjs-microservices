import { DynamicModule, Module } from '@nestjs/common';
import { ClientProviderOptions, ClientsModule } from '@nestjs/microservices';
import { MicroserviceType } from './types';
import { getMicroserviceConfig } from '@libs/config';

@Module({})
export class MicroserviceModule {
  static registerMicroservices(services: MicroserviceType[]): DynamicModule {
    return {
      module: MicroserviceModule,
      imports: [
        ClientsModule.register(
          services.map(
            (service) =>
              getMicroserviceConfig(service) as ClientProviderOptions,
          ),
        ),
      ],
      exports: [ClientsModule],
    };
  }
}
