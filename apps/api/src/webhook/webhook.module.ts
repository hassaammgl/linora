import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service.js';
import { WebhookController } from './webhook.controller.js';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
