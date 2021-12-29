import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresModule } from 'src/stores/stores.module';
import { StoresRepository } from 'src/stores/stores.repo';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repo';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsRepository, StoresRepository]), StoresModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
