import { Module } from '@nestjs/common';
import { ShortcutsService } from './shortcuts.service.js';
import { ShortcutsController } from './shortcuts.controller.js';

@Module({
  controllers: [ShortcutsController],
  providers: [ShortcutsService],
})
export class ShortcutsModule {}
