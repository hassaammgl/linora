import { Test, TestingModule } from '@nestjs/testing';
import { StaffChatService } from './staff-chat.service.js';

describe('StaffChatService', () => {
  let service: StaffChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffChatService],
    }).compile();

    service = module.get<StaffChatService>(StaffChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
