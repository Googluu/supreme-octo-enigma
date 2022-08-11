/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hi() {
    return 'con /sass/';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
    ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('categories/:categoryId/products/:id')
  getCategory(@Param('id') id: string, @Param('categoryId') categoryId: string) {
    return `product ${id} and ${categoryId}`;
  }
}
