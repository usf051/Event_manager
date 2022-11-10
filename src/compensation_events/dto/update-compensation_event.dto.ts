import { PartialType } from '@nestjs/mapped-types';
import { CreateCompensationEventDto } from './create-compensation_event.dto';

export class UpdateCompensationEventDto extends PartialType(CreateCompensationEventDto) {}
