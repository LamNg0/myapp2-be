import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityAbstract } from '@common/database';  

@Entity({ name: 'customer' })
export class CustomerEntity extends EntityAbstract {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public phone: number;
	
	@Column()
	public name: string;

}
