import { Module } from '@nestjs/common';
import { CompensationEventsService } from './compensation_events.service';
import { CompensationEventsController } from './compensation_events.controller';

@Module({
  controllers: [CompensationEventsController],
  providers: [CompensationEventsService]
})
export class CompensationEventsModule {}
