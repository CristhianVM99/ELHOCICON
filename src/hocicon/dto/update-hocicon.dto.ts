import { PartialType } from '@nestjs/mapped-types';
import { CreateHociconDto } from './create-hocicon.dto';

export class UpdateHociconDto extends PartialType(CreateHociconDto) {}
