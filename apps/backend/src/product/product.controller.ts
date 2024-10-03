import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductPrisma } from './product.prisma';
import { Product } from '@gstore/core';

@Controller('product')
export class ProductController {
  constructor(private readonly repo: ProductPrisma) {}

  @Post()
  save(@Body() produto: Product): Promise<void> {
    return this.repo.save(produto);
  }

  @Get()
  getAll(): Promise<Product[]> {
    return this.repo.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Product> {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
