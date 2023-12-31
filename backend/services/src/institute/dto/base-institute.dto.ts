import { PickType } from '@nestjs/swagger';
import { Institute } from '../institute.entity';

export class BaseInstituteDto extends PickType(Institute, [
  'id',
  'name',
  'user_id',
  'created_by',
  'updated_by',
] as const) {}
