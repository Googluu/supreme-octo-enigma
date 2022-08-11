import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [],
})
export class ProductsModule {}
