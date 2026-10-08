import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service.js';
import { ChannelController } from './channel.controller.js';

@Module({
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}
