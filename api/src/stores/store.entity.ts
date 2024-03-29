
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'main_website' })
  mainWebsite: string;

  @Column()
  locale: string;
  
  @Column()
  currency: string;
}