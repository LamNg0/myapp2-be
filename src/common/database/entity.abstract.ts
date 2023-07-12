import { BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Generated } from 'typeorm';
import { IEntityInterface } from './entity.interface';

export abstract class EntityAbstract extends BaseEntity implements IEntityInterface {
    @Generated('uuid')
    system_id: string;

    @CreateDateColumn({
        select: false,
        type: 'timestamp',
        name: 'created_at',
        default: () => "NOW()"
    })
    created_at: Date;

    @UpdateDateColumn({
        select: false,
        type: 'timestamp',
        name: 'updated_at',
        default: () => "CURRENT_TIMESTAMP(6)"
    })
    updated_at: Date;

    @DeleteDateColumn({
		select: false,
		type: 'timestamp',
		name: 'deleted_at',
	})
	deleted_at: Date;
}
