import { Test, TestingModule } from '@nestjs/testing';
import { AppVersionController } from './app-version.controller.js';
import { AppVersionService } from './app-version.service.js';

describe('AppVersionController', () => {
  let controller: AppVersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppVersionController],
      providers: [AppVersionService],
    }).compile();

    controller = module.get<AppVersionController>(AppVersionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
