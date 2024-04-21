import { Inject } from '@nestjs/common';
import { MicroserviceType } from './types';

export const InjectMicroservice = (
  name: MicroserviceType,
): ParameterDecorator => Inject(`${name}_SERVICE`);
