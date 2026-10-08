import { Test, TestingModule } from '@nestjs/testing';
import { StaffChatController } from './staff-chat.controller.js';
import { StaffChatService } from './staff-chat.service.js';

describe('StaffChatController', () => {
  let controller: StaffChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffChatController],
      providers: [StaffChatService],
    }).compile();

    controller = module.get<StaffChatController>(StaffChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
