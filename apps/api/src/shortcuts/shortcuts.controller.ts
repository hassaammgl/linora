import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortcutsService } from './shortcuts.service.js';
import { CreateShortcutDto } from './dto/create-shortcut.dto.js';
import { UpdateShortcutDto } from './dto/update-shortcut.dto.js';

@Controller('shortcuts')
export class ShortcutsController {
  constructor(private readonly shortcutsService: ShortcutsService) {}

  @Post()
  create(@Body() createShortcutDto: CreateShortcutDto) {
    return this.shortcutsService.create(createShortcutDto);
  }

  @Get()
  findAll() {
    return this.shortcutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortcutsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortcutDto: UpdateShortcutDto) {
    return this.shortcutsService.update(+id, updateShortcutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortcutsService.remove(+id);
  }
}
