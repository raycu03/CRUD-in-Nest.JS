import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  app.enableCors();
  await app.listen(PORT, () =>
    console.log(`Server is live at http://localhost:${PORT}`),
  );
}
bootstrap();
