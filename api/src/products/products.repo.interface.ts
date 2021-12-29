import { FindManyOptions } from "typeorm";
import { Product } from "./product.entity";

export interface IProductsRepository {
    getById(id: number): Promise<Product>;
    getByEan(ean: string): Promise<Product>;
    getBySku(sku: string): Promise<Product>;
    createNew(name: string, ean: string, sku: string, description: string): Promise<Product>;
    updateExisting(product: Product): Promise<Product>;
}