import { PartialType } from '@nestjs/mapped-types';
import { CreateShortcutDto } from './create-shortcut.dto.js';

export class UpdateShortcutDto extends PartialType(CreateShortcutDto) {}
