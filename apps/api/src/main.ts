import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import cookieParser from "cookie-parser"
import { ValidationPipe } from '@nestjs/common';
import { originAllowed } from "./common/cors-origin.js"
import { rejectCrossSiteWrite } from "./common/csrf-origin.js"

async function bootstrap() {
  process.on('unhandledRejection', (reason) => {
    console.error('[unhandledRejection]', reason);
  });
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(cookieParser);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
    }),
  );
  app.enableCors({
    origin: (origin: string | undefined, cb: (arg0: null, arg1: boolean) => any) => cb(null, originAllowed(origin)),
    credentials: true,
  });
  app.use(rejectCrossSiteWrite);
  const port = Number(process.env.PORT ?? 6000);
  await app.listen(port).then(() => {
    console.log(`Api listening on http://127.0.0.1:${port}/api/v1`);
  })
}
await bootstrap();
