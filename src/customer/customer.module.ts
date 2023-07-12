import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerEntity } from './databases/customer.entity';
import { CustomerRepository } from './databases/customer.repo';
import { CustomerMess } from './event/customer.mess';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
	imports: [
    // TypeOrmModule.forFeature( [CustomerEntity, CustomerRepository], process.env.POSTGRES_TYPE ),
    TypeOrmModule.forFeature( [CustomerEntity, CustomerRepository], process.env.TYPEORM_TYPE ),
  ],
  controllers: [CustomerController],
  providers: [
    CustomerMess,
    CustomerService,
  ],
  exports: [
    CustomerMess,
  ]
})
export class CustomerModule {}
