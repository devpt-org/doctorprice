import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';
import { StoresRepository } from './stores.repo';

@Injectable()
export class StoresService {
    constructor(
        @InjectRepository(StoresRepository)
        private storesRepository: StoresRepository,
    ) { }

    create(name: string, mainWebsite: string, locale: string, currency: string): Promise<Store> {
        return this.storesRepository.create(name, mainWebsite, locale, currency);
    }

    getAll(): Promise<Store[]> {
        return this.storesRepository.getAll();
    }

    getById(id: number): Promise<Store> {
        return this.storesRepository.getById(id);
    }
}
