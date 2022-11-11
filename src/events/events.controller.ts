import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateCompensationEventDto } from './dto/create-compensation_event.dto';
import { RecordDto } from './dto/record.dto';
import { TaskDto } from './dto/task.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() data: CreateEventDto) {
    const event = await this.eventsService.create(data);
    return {
      statusCode : HttpStatus.OK,
      message : 'created event',
      event,
    }
  }

  @Get()
  async findAll() {
    const events = await this.eventsService.findAll()
    return {
      statusCode : HttpStatus.OK,
      message : 'events fetched',
      events,
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const event = await this.eventsService.findOne(id);
    return {
      statusCode : HttpStatus.OK,
      message : 'event fetched',
      event,
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: UpdateEventDto) {
    const event = await this.eventsService.update(id, data);
    return {
      statusCode : HttpStatus.OK,
      message : 'event updated',
      event,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const event = await this.eventsService.remove(id);
    return {
      statusCode : HttpStatus.OK,
      message : 'event removed',
    };
  }


  @Post('comp/:id')
  async create_comp(@Param('id') id: number, @Body() data: CreateCompensationEventDto) {
    const event = await this.eventsService.comp_create(id,data);
    return {
      statusCode : HttpStatus.OK,
      message : 'created compesation event',
      event,
    }
  }

  @Post('record/:id')
  async create_record(@Param('id') id: number, @Body() data: RecordDto) {
    const record = await this.eventsService.record_create(id,data);
    return {
      statusCode : HttpStatus.OK,
      message : 'created record',
      record,
    };
  }

  @Post('task/:id')
  async create_task(@Param('id') id: number, @Body() data: TaskDto) {
    const task = await this.eventsService.task_create(id,data);
    return {
      statusCode : HttpStatus.OK,
      message : 'created task',
      task,
    };
  }

}




