import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffChatDto } from './create-staff-chat.dto.js';

export class UpdateStaffChatDto extends PartialType(CreateStaffChatDto) {}
