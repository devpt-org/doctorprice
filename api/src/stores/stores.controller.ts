import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './store.entity';
import { StoresService } from './stores.service';

@ApiTags('Stores')
@Controller('stores')
export class StoresController {
    constructor(private readonly storesService: StoresService) {}

    @Get()
    @ApiOperation({ summary: 'Lists all stores.' })
    getAllStores(): Promise<Store[]> {
        return this.storesService.getAll();
    }

    @Post()
    @ApiOperation({ summary: 'Creates a store.' })
    @ApiResponse({ status: 201, description: 'The store has been successfully created.' })
    async create(@Body() createStoreDto: CreateStoreDto) {
        const { name, mainWebsite, locale, currency } = createStoreDto;
        return this.storesService.create(name, mainWebsite, locale, currency);
    }
}
