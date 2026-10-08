import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.getOrThrow<string>('MONGO_URI'),
        dbName: config.get<string>('MONGO_DB_NAME') || undefined,
      }),
    })
  ],
})
export class DatabaseModule { }
