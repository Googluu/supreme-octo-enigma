/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // lo ignora quitar del payload todos los atributos que no esten definidos en el dtos
      forbidNonWhitelisted: true, // con este no lo ingnora le pega su error para que envie lso datos good
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('ecommerce')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
