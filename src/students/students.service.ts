import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { StudentsEntity } from './students.entity';

@Injectable()
export class StudentsService extends TypeOrmCrudService<StudentsEntity>{
    constructor (@InjectRepository(StudentsEntity) repo) {
        super(repo)
    }
}
