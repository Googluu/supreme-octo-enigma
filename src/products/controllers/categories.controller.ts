import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:id')
  getCategory(
    @Param('id') id: string,
    @Param('categoryId') categoryId: string,
  ) {
    return `product ${id} and ${categoryId}`;
  }
}
