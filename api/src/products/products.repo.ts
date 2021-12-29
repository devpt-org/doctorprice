import {EntityRepository, AbstractRepository, DeleteResult, FindManyOptions, Repository} from "typeorm";
import { ProductNotFoundException } from "./exceptions/product-not-found.exception";
import { Product } from "./product.entity";
import { IProductsRepository } from "./products.repo.interface";

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> implements IProductsRepository {

    async getById(id: number): Promise<Product> {
        return await this.findOne(id);
    }

    async getByEan(ean: string): Promise<Product> {
        const product = await this.findOne({ where: { ean } });
        
        if (!product) {
            throw new ProductNotFoundException();
        }

        return product;
    }

    async getBySku(sku: string): Promise<Product> {
        const product = await this.findOne({ where: { sku } });
        
        if (!product) {
            throw new ProductNotFoundException();
        }

        return product;
    }

    async createNew(name: string, ean: string, sku: string, description: string): Promise<Product> {
        // Read variables from arguments and save a new product
        const product = this.create();
        product.name = name;
        product.ean = ean;
        product.sku = sku;
        product.description = description;
        
        return await this.save(product);
    }

    async updateExisting(product: Product): Promise<Product> {
        return await this.save(product);
    }

}