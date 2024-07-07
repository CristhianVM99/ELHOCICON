import { Injectable } from '@nestjs/common';
import { CreateHociconDto } from '../dto/create-hocicon.dto';
import { UpdateHociconDto } from '../dto/update-hocicon.dto';

@Injectable()
export class HociconService {
  create(createHociconDto: CreateHociconDto) {
    return 'This action adds a new hocicon';
  }

  findAll() {
    return `This action returns all hocicon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hocicon`;
  }

  update(id: number, updateHociconDto: UpdateHociconDto) {
    return `This action updates a #${id} hocicon`;
  }

  remove(id: number) {
    return `This action removes a #${id} hocicon`;
  }
}
