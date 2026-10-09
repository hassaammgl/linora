import { Injectable } from '@nestjs/common';

@Injectable()
export class FcmService {
  remove(id: number) {
    return `This action removes a #${id} fcm`;
  }
}
