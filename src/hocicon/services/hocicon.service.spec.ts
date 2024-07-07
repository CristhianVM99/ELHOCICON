import { Test, TestingModule } from '@nestjs/testing';
import { HociconService } from './hocicon.service';

describe('HociconService', () => {
  let service: HociconService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HociconService],
    }).compile();

    service = module.get<HociconService>(HociconService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
