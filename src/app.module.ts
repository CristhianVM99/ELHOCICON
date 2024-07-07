import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HociconModule } from './hocicon/hocicon.module';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    HociconModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
