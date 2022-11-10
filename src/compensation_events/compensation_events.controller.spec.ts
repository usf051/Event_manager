import { Test, TestingModule } from '@nestjs/testing';
import { CompensationEventsController } from './compensation_events.controller';
import { CompensationEventsService } from './compensation_events.service';

describe('CompensationEventsController', () => {
  let controller: CompensationEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompensationEventsController],
      providers: [CompensationEventsService],
    }).compile();

    controller = module.get<CompensationEventsController>(CompensationEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
