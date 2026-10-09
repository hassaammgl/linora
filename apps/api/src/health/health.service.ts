import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  status() {
    return {
      success: true,
      service: 'api',
      status: 'ok',
      message: 'Nest API scaffold.',
    };
  }
}
