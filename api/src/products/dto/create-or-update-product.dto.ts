import { IsNotEmpty } from "class-validator";

export class CreateOrUpdateProductDto {
     /**
     * The name of the product.
     * @example 'Product name'
     */
    @IsNotEmpty()
    name: string;

    /**
     * The store where the product is located.
     * @example '1337'
     */
    @IsNotEmpty()
    storeId: number;

    /**
     * The EAN of the product.
     * @example '1234567891123'
     */
    ean: string;

    /**
     * The SKU of the product.
     * @example '9897423XZC'
     */
    sku: string;

    /**
     * The description of the product.
     * @example 'This is a description of the product.'
     */
    description: string;

    /**
     * Whether a product is in stock or not.
     * @example 'true'
     */
    inStock: boolean;

    /**
     * The total amount of products in-stock.
     * @example '73'
     */
    stockAmount: number;

    /**
     * The price of the product excluding store local tax.
     * @example '34.99'
     */
    priceExcludingTax: number;

    /**
     * The price of the product including store local tax.
     * @example '45.487'
     */
    priceIncludingTax: number;
}