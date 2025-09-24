import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitConvertion: true
  limit?: number;

  @IsOptional()
  // @IsPositive()
  @Min(0)
  @Type(() => Number) // enableImplicitConvertion: true
  offset?: number;
}
