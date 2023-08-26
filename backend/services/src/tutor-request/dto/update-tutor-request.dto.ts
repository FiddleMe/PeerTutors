import { PickType } from '@nestjs/swagger';
import { BaseTutorRequestDto } from './base-tutor-request.dto';

export class UpdateTutorRequestDto extends PickType(BaseTutorRequestDto, [
  'id',
  'tutor_id',
  'date',
  'module_id',
  'student_id',
  'isAccepted',
  'created_by',
  'updated_by',
] as const) {}
