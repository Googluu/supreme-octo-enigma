import { Module, Global } from '@nestjs/common';

const API_KEY = '1234434';
const API_KEY_PROD = 'PROD12312';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'stag' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
