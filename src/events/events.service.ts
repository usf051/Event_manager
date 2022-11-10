import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateCompensationEventDto } from './dto/create-compensation_event.dto';
import { Event } from './entities/event.entity';
import { CompensationEvent } from './entities/compensation_event.entity';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,

    @InjectRepository(CompensationEvent)
    private compeventsRepository: Repository<CompensationEvent>,
  ) {}

  async create(data: CreateEventDto) {
    const event = this.eventsRepository.create(data);
    await this.eventsRepository.save(data);
    return event;
  }

  async findAll() {
    return await this.eventsRepository.find();
  }

  async findOne(id: number) {
    return await this.eventsRepository.findOne({ where : { id: id }});
  }

  async update(id: number, data: UpdateEventDto) {
    await this.eventsRepository.update({id}, data);
    return await this.eventsRepository.findOne({ where : { id: id }});
  }

  async remove(id: number) {
    await this.eventsRepository.delete({id});
    
    return { deleted : true };
  }


  async comp_create(id: number, data: CreateCompensationEventDto) {
    const event = await this.eventsRepository.findOne({ where : { id: id }});
    console.log("here i am", data, data[0]["event_type"]);
    const Comp_event = this.compeventsRepository.create({
      event_type: data[0]["event_type"],
      commercial_owner: data[0]["async (params:type) => {
	commercial_owner
}"],
      operational_owner: data[0]["operational_owner"],
      record_supporter : data[0]["record_supporter"],
      event_id : event,
    });
    await this.compeventsRepository.save(Comp_event);
    return Comp_event;
  }
}





