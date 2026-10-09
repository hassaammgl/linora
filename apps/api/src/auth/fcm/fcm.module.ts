import { Module } from '@nestjs/common';
import { FcmService } from './fcm.service.js';
import { FcmController } from './fcm.controller.js';

@Module({
  controllers: [FcmController],
  providers: [FcmService],
})
export class FcmModule {}
