import { Module } from '@nestjs/common';
import { StaffChatService } from './staff-chat.service.js';
import { StaffChatController } from './staff-chat.controller.js';

@Module({
  controllers: [StaffChatController],
  providers: [StaffChatService],
})
export class StaffChatModule {}
