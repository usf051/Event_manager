import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompensationEventsService } from './compensation_events.service';
import { CreateCompensationEventDto } from './dto/create-compensation_event.dto';
import { UpdateCompensationEventDto } from './dto/update-compensation_event.dto';

@Controller('compensation-events')
export class CompensationEventsController {
  constructor(private readonly compensationEventsService: CompensationEventsService) {}

  @Post()
  create(@Body() createCompensationEventDto: CreateCompensationEventDto) {
    return this.compensationEventsService.create(createCompensationEventDto);
  }

  @Get()
  findAll() {
    return this.compensationEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compensationEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompensationEventDto: UpdateCompensationEventDto) {
    return this.compensationEventsService.update(+id, updateCompensationEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compensationEventsService.remove(+id);
  }
}
