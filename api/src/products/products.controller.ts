import { Body, Controller, Delete, Get, Patch, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    @Post()
    @ApiOperation({ summary: 'Creates or updates a product.' })
    @ApiResponse({ status: 201, description: 'The product has been successfully created/updated.' })
    create(@Body() createProductDto: CreateProductDto): string {
        const { name, ean, sku, description } = createProductDto;

        console.log('createProductDto', name, ean, sku, description);

        return 'Creating a new product';
    }

    @Get('/price/history')
    @ApiOperation({ summary: 'Lists a history of prices of all products.' })
    getPriceHistory(@Req() request: Request): string {
        return 'Getting price history of all products';
    }
}
