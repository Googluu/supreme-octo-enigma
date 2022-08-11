import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: `product ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param() id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param() id: number) {
    return {
      id,
    };
  }
}
