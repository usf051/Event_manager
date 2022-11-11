import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateCompensationEventDto } from './dto/create-compensation_event.dto';
import { RecordDto } from './dto/record.dto';
import { TaskDto } from './dto/task.dto';
import { Event } from './entities/event.entity';
import { CompensationEvent } from './entities/compensation_event.entity';
import { Record } from './entities/record.entity';
import { Task } from './entities/task.entity';


@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,

    @InjectRepository(CompensationEvent)
    private compeventsRepository: Repository<CompensationEvent>,

    @InjectRepository(Record)
    private recordsRepository: Repository<Record>,

    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
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
      commercial_owner: data[0]["commercial_owner"],
      operational_owner: data[0]["operational_owner"],
      record_supporter : data[0]["record_supporter"],
      event_id : event,
    });
    await this.compeventsRepository.save(Comp_event);
    return Comp_event;
  }

 

  async record_create(id: number, data: RecordDto) {
    const event = await this.eventsRepository.findOne({ where : { id: id }});
    console.log("here i am", data, data[0]["document_type"]);
    const record = this.recordsRepository.create({
      document_type: data[0]["document_type"],
      from: data[0]["from"],
      to: data[0]["to"],
      subject : data[0]["subject"],
      comment: data[0]["comment"],
      link: data[0]["link"],
      status: data[0]["status"],
      event_id : event,
    });
    await this.recordsRepository.save(record);
    return record;
  }

  id: number;
    task_details: string;
    assigned_to: string;
    deadline: string;
    assigned_by : string;
    assigned_date : string;
    status : string;
    event_id : number;

  async task_create(id: number, data: TaskDto) {
    const event = await this.eventsRepository.findOne({ where : { id: id }});
    console.log("here i am", data, data[0]["task_details"]);
    const task = this.tasksRepository.create({
      task_details: data[0]["task_details"],
      assigned_to: data[0]["assigned_to"],
      deadline: data[0]["deadline"],
      assigned_by : data[0]["assigned_by"],
      assigned_date: data[0]["assigned_date"],
      status: data[0]["status"],
      event_id : event,
    });
    await this.tasksRepository.save(task);
    return task;
  }

}





