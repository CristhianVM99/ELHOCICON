import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HociconService } from '../services/hocicon.service';
import { CreateHociconDto } from '../dto/create-hocicon.dto';
import { UpdateHociconDto } from '../dto/update-hocicon.dto';

@Controller('hocicon')
export class HociconController {
  constructor(private readonly hociconService: HociconService) {}

  @Post()
  create(@Body() createHociconDto: CreateHociconDto) {
    return this.hociconService.create(createHociconDto);
  }

  @Get()
  findAll() {
    return this.hociconService.findAll();
  }

  @Get('message')
  message(): string {
    return 'hola cristhian';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hociconService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHociconDto: UpdateHociconDto) {
    return this.hociconService.update(+id, updateHociconDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hociconService.remove(+id);
  }
}
