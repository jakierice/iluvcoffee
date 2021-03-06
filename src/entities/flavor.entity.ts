import { Coffee } from 'src/entities/coffees.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((_type) => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
