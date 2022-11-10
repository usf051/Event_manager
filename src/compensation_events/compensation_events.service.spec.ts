import { Test, TestingModule } from '@nestjs/testing';
import { CompensationEventsService } from './compensation_events.service';

describe('CompensationEventsService', () => {
  let service: CompensationEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompensationEventsService],
    }).compile();

    service = module.get<CompensationEventsService>(CompensationEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
