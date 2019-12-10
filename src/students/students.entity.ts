import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class StudentsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 500, unique: true })
  code: string;

  @Column('varchar', { length: 500 })
  name: string;
}
