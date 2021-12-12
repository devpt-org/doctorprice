export class CreateProductDto {
    /**
     * The name of the product.
     * @example 'Product name'
     */
    name: string;

    /**
     * The EAN of the product.
     * @example 'ZKVJ-1234-5678'
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
}