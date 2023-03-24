import { IsNotEmpty } from "class-validator";

export class CreateStoreDto {
     /**
     * The name of the store.
     * @example 'Store name'
     */
    @IsNotEmpty()
    name: string;

    /**
     * The main website of the store, without prefixes, suffices or www subdomain.
     * @example 'ecommerceshop.com'
     */
    @IsNotEmpty()
    mainWebsite: string;

    /**
     * The main locale of the store.
     * @example 'en-US'
     */
    locale: string;

    /**
     * The main currency used by the website. This will be the default for price display
     * for this store, but can be overriden in each product.
     * @example 'EUR'
     */
    currency: string;
}