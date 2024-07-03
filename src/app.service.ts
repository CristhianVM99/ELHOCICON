import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Cristhian Como estas Saludos desde la rama develop.';
  }
}
