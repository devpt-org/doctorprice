import { Store } from "./store.entity";

export interface IStoresRepository {
    getAll(): Promise<Store[]>;
    getById(id: number): Promise<Store>;
    create(name: string, mainWebsite: string, locale: string, currency: string): Promise<Store>;
}