import { Injectable } from '@nestjs/common';
import { CreateStaffChatDto } from './dto/create-staff-chat.dto.js';
import { UpdateStaffChatDto } from './dto/update-staff-chat.dto.js';

@Injectable()
export class StaffChatService {
  create(createStaffChatDto: CreateStaffChatDto) {
    return 'This action adds a new staffChat';
  }

  findAll() {
    return `This action returns all staffChat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffChat`;
  }

  update(id: number, updateStaffChatDto: UpdateStaffChatDto) {
    return `This action updates a #${id} staffChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffChat`;
  }
}
