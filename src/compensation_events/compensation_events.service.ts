import { Injectable } from '@nestjs/common';
import { CreateCompensationEventDto } from './dto/create-compensation_event.dto';
import { UpdateCompensationEventDto } from './dto/update-compensation_event.dto';

@Injectable()
export class CompensationEventsService {
  create(createCompensationEventDto: CreateCompensationEventDto) {
    return 'This action adds a new compensationEvent';
  }

  findAll() {
    return `This action returns all compensationEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compensationEvent`;
  }

  update(id: number, updateCompensationEventDto: UpdateCompensationEventDto) {
    return `This action updates a #${id} compensationEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} compensationEvent`;
  }
}
