import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  // injectar un valor que se utilize atravez de toda la aplicacion
  constructor(
    // @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apikey = this.configService.apikey; // con tipado para saber que es un string
    const name = this.configService.database.name;
    return `Hello World! ${apikey} ${name}`;
  }
}
