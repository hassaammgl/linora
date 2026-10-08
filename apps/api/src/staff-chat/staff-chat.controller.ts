import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffChatService } from './staff-chat.service.js';
import { CreateStaffChatDto } from './dto/create-staff-chat.dto.js';
import { UpdateStaffChatDto } from './dto/update-staff-chat.dto.js';

@Controller('staff-chat')
export class StaffChatController {
  constructor(private readonly staffChatService: StaffChatService) {}

  @Post()
  create(@Body() createStaffChatDto: CreateStaffChatDto) {
    return this.staffChatService.create(createStaffChatDto);
  }

  @Get()
  findAll() {
    return this.staffChatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffChatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffChatDto: UpdateStaffChatDto) {
    return this.staffChatService.update(+id, updateStaffChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffChatService.remove(+id);
  }
}
