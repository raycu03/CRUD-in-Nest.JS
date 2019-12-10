import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsEntity } from './students.entity';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
    imports: [ TypeOrmModule.forFeature([ StudentsEntity ])],
    controllers: [ StudentsController ],
    providers: [ StudentsService ]
})
export class StudentsModule {}
