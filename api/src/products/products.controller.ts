import { Body, Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateOrUpdateProductDto } from './dto/create-or-update-product.dto';
import { ApiPaginatedResponse, PaginatedDto } from './dto/paginated-products.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @ApiOperation({ summary: 'Paginates through all products.' })
    @ApiQuery({ name: 'page', type: 'number', required: true })
    @ApiQuery({ name: 'limit', type: 'number', required: true })
    @ApiPaginatedResponse(Product)
    paginateProducts(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    ): Promise<PaginatedDto<Product>> {
        limit = limit > 100 ? 100 : limit;

        //return Promise.reject();
        return this.productsService.paginate({
            page,
            limit,
            route: 'http://cats.com/cats',
        });
    }

    @Post()
    @ApiOperation({ summary: 'Creates or updates a product.' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created/updated.' })
    async createOrUpdate(@Body() createOrUpdateProductDto: CreateOrUpdateProductDto) {
        return this.productsService.createOrUpdate(createOrUpdateProductDto);
    }

    @Get('/price/history')
    @ApiOperation({ summary: 'Lists a history of prices of all products.' })
    getPriceHistory(@Req() request: Request): string {
        return 'Getting price history of all products';
    }
}
