import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  echo(obj: { message: string }) {
    return obj.message;
  }
}
