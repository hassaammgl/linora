import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

  hello() {
    return `This is all test`;
  }
}
