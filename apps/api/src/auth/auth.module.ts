import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AgentModule } from './agent/agent.module.js';
import { CustomerModule } from './customer/customer.module.js';
import { FcmModule } from './fcm/fcm.module.js';
import { PlatformModule } from '../platform/platform.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema.js';
import { Channel, ChannelSchema } from '../schemas/channel.schema.js';
import { PlatformSettings, PlatformSettingsSchema } from '../schemas/platform-settings.schema.js';
import { AdminAuthController } from './admin/admin.controller.js';
import { AdminAuthService } from './admin/admin.service.js';

@Module({
  imports: [
    forwardRef(() => PlatformModule),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Channel.name, schema: ChannelSchema },
      { name: PlatformSettings.name, schema: PlatformSettingsSchema },
    ]),
    AgentModule,
    CustomerModule,
    FcmModule,
  ],
  controllers: [
    AuthController,
    AdminAuthController,
  ],
  providers: [
    AdminAuthService,
  ],
  exports: [
    MongooseModule,
  ],
})
export class AuthModule { }
