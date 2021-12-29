import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresController } from './stores.controller';
import { StoresRepository } from './stores.repo';
import { StoresService } from './stores.service';

@Module({
    imports: [TypeOrmModule.forFeature([StoresRepository])],
    controllers: [StoresController],
    providers: [StoresService],
    exports: [StoresService]
})

export class StoresModule { }
