import { Controller, Param, Delete } from '@nestjs/common';
import { FcmService } from './fcm.service.js';

@Controller('fcm')
export class FcmController {
  constructor(private readonly fcmService: FcmService) { }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fcmService.remove(+id);
  }
}
