import { Flavor } from 'src/entities/flavor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() // sql table === 'coffee' unless specified as Entity arg
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany((_type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors: Flavor[];

  @Column({ default: 0 })
  recommendations: number;
}
