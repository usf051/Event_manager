import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './entities/event.entity';
import { CompensationEvent } from './entities/compensation_event.entity';
import { Record } from './entities/record.entity';
import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, CompensationEvent, Record, Task])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
