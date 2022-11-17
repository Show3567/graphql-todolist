import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const port = 4231;
  await app.listen(port || 3000);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
