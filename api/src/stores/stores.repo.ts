import {EntityRepository, AbstractRepository, DeleteResult} from "typeorm";
import { StoreNotFoundException } from "./exceptions/store-not-found.exception";
import { Store } from "./store.entity";
import { IStoresRepository } from "./stores.repo.interface";

@EntityRepository(Store)
export class StoresRepository extends AbstractRepository<Store> implements IStoresRepository {

    async getAll(): Promise<Store[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<Store> {
        const store = await this.repository.findOne(id);

        if (!store) {
            throw new StoreNotFoundException();
        }

        return store;
    }

    async create(name: string, mainWebsite: string, locale: string, currency: string): Promise<Store> {
        return await this.repository.save({ name, mainWebsite, locale, currency });
    }

}