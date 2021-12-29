import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    paginate,
    Pagination,
    IPaginationOptions,
  } from 'nestjs-typeorm-paginate';
import { StoresRepository } from 'src/stores/stores.repo';
import { CreateOrUpdateProductDto } from './dto/create-or-update-product.dto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repo';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository) private readonly productsRepository: ProductsRepository,
        @InjectRepository(StoresRepository) private readonly storesRepository: StoresRepository,
    ) { }

    async createOrUpdate(createOrUpdateDto: CreateOrUpdateProductDto): Promise<Product> {
        const { name, storeId, ean, sku, description, inStock, stockAmount } = createOrUpdateDto;

        const store = await this.storesRepository.getById(storeId);

        let product: Product;
        try {
            product = await this.productsRepository.getByEan(ean);
        } catch (ProductNotFoundException) {
            product = await this.productsRepository.getBySku(sku);
        }

        if (!product) {
            return this.productsRepository.createNew(name, ean, sku, description);
        }

        return this.productsRepository.updateExisting({
            ...product,
            store,
            name,
            description,
            ean,
            sku,
            inStock,
            stockAmount,
        });
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<Product>> {
        return paginate<Product>(this.productsRepository, options);
    }
    
    /*
    async paginate(
        options: PaginationOptionsInterface,
    ): Promise<Pagination<Product>> {
        const [results, total] = await this.productsRepository.getAndCount({
            take: options.limit,
            skip: options.page,
        });

        return new Pagination<Product>({
            results,
            total,
        });
    }
    */

}
