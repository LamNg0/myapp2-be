import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate, IsString,  } from 'class-validator';

export class CreateCustomerDto {
	@ApiProperty()
	@IsNotEmpty()
	phone: number;

	@ApiProperty()
	@IsNotEmpty()
	name: string;
}