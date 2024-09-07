import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://movieapp-u11o.onrender.com/', // Permitir el acceso desde Next.js
  });
  await app.listen(process.env.PORT || 3080);
}
bootstrap();