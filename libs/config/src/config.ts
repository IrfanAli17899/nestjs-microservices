import { MicroserviceType } from '@lib/microservice';
import { Transport } from '@nestjs/microservices';

export const config = () => ({});

export function getMicroserviceConfig(name: MicroserviceType) {
  return {
    name: `${name}_SERVICE`,
    transport: Transport.TCP,
    options: {
      host: getEnv<string>(`${name}_SERVICE_HOST`),
      port: getEnv<number>(`${name}_SERVICE_PORT`),
    },
  };
}
export function getEnv<T = any>(key: string, error = true): T {
  const env = process.env[key] as T;
  if (env === undefined && error) {
    throw new Error(`ConfigService: ${key} is undefined`);
  }
  return env;
}
