
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Store } from '../stores/store.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Store)
  @JoinColumn()
  store: Store;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column()
  ean: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'in_stock' })
  inStock: boolean;

  @Column({ name: 'stock_amount', type: 'integer' })
  stockAmount: number;

  @Column({ name: 'price_excl_tax', type: 'decimal', precision: 10, scale: 2 })
  priceExcludingTax: number;

  @Column({ name: 'price_incl_tax', type: 'decimal', precision: 10, scale: 2 })
  priceIncludingTax: number;

  @Column({ default: true })
  isActive: boolean;
}