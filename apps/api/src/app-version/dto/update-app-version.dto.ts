import { PartialType } from '@nestjs/mapped-types';
import { CreateAppVersionDto } from './create-app-version.dto.js';

export class UpdateAppVersionDto extends PartialType(CreateAppVersionDto) {}
