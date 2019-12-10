import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { StudentsEntity } from './students.entity';
import { StudentsService } from './students.service';

@Crud({
  model: {
    type: StudentsEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('students')
export class StudentsController {
  constructor(public service: StudentsService) {}
}
