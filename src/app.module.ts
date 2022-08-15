/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // para que lea las variables de entorno el archivo .env
      isGlobal: true, // para que sea global en toda la aplicacion
    }),
    HttpModule,
    ProductsModule,
    UsersModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // tiene las caracteristicas de ser asicrono y de recibir inyeccion de dependecias
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http.get('https://jsonplaceholder.typicode.com/todos')
          .toPromise()
        return tasks.data;
      },
      inject: [HttpService],
    }
  ],
})
export class AppModule { }
