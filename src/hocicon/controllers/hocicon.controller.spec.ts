import { Test, TestingModule } from '@nestjs/testing';
import { HociconController } from './hocicon.controller';
import { HociconService } from '../services/hocicon.service';

describe('HociconController', () => {
  let controller: HociconController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HociconController],
      providers: [HociconService],
    }).compile();

    controller = module.get<HociconController>(HociconController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
