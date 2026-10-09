import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module.js';
import { HealthModule } from './health/health.module.js';
import { PlatformModule } from './platform/platform.module.js';
import { AuthModule } from './auth/auth.module.js';
import { SettingsModule } from './settings/settings.module.js';
import { AppVersionModule } from './app-version/app-version.module.js';
import { ShortcutsModule } from './shortcuts/shortcuts.module.js';
import { WebhookModule } from './webhook/webhook.module.js';
import { AnnouncementModule } from './announcement/announcement.module.js';
import { StaffChatModule } from './staff-chat/staff-chat.module.js';
import { ChannelModule } from './channel/channel.module.js';
import { TagsModule } from './tags/tags.module.js';
import { ChatModule } from './chat/chat.module.js';
import { AdminModule } from './admin/admin.module.js';
import { TestModule } from './test/test.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../api/.env'],
    }),
    DatabaseModule,
    HealthModule,
    PlatformModule,
    AuthModule,
    SettingsModule,
    AppVersionModule,
    ShortcutsModule,
    WebhookModule,
    AnnouncementModule,
    StaffChatModule,
    ChannelModule,
    TagsModule,
    ChatModule,
    AdminModule,
    TestModule
  ],
})
export class AppModule { }
