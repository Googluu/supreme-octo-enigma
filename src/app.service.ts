import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  // injectar un valor que se utilize atravez de toda la aplicacion
  constructor(
    @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): string {
    console.log(this.tasks);
    return `Hello World! ${this.apikey}`;
  }
}
