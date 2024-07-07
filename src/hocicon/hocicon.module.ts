import { Module } from '@nestjs/common';
import { HociconService } from './services/hocicon.service';
import { HociconController } from './controllers/hocicon.controller';

@Module({
  controllers: [HociconController],
  providers: [HociconService],
})
export class HociconModule {}
