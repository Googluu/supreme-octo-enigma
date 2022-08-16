/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, Length, IsEmail } from 'class-validator';
import { PartialType, ApiProperty  } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

