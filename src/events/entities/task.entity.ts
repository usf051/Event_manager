import { Column, Entity,ManyToOne, PrimaryGeneratedColumn,  CreateDateColumn } from 'typeorm';
import { Event }  from '../entities/event.entity';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  task_details: string;

  @Column({ length: 50 })
  assigned_to: string;

  @CreateDateColumn()
  deadline: Date;

  @Column({ length: 50 })
  assigned_by: string;

  @CreateDateColumn()
  assigned_date: Date;

  @Column({ length: 50 })
  status: string;

  @ManyToOne(() => Event, (event_id: Event) => event_id.tasks)
  event_id: Event;

}
