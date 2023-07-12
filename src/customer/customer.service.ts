import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CustomerEntity } from './database/customer.entity';
import { CustomerRepository } from './database/customer.repo'
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    // @InjectRepository(CustomerEntity, process.env.POSTGRES_TYPE)
    @InjectRepository(CustomerEntity, process.env.TYPEORM_TYPE)
    private readonly repository: CustomerRepository,
  ) {}

  async create(createDto: CreateCustomerDto): Promise<CustomerEntity> {
    try {
      const entity = this.repository.create({ ...createDto });
      const result = await this.repository.save(entity);
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  findAll(): Promise<CustomerEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CustomerEntity> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return entity;
  }

  async update(id: number, updateDto: UpdateCustomerDto): Promise<CustomerEntity> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    const updateEntity = this.repository.create({ ...updateDto, id });
    return await this.repository.save(updateEntity);
  }

  async remove(id: number) {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.repository.softDelete(id);
  }
}
