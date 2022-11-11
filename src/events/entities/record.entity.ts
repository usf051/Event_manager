import { Column, Entity,ManyToOne, PrimaryGeneratedColumn,  CreateDateColumn } from 'typeorm';
import { Event }  from '../entities/event.entity';

@Entity({ name: 'records' })
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  document_type: string;

  @CreateDateColumn()
  from: Date;

  @CreateDateColumn()
  to: Date;

  @Column({ length: 50 })
  subject: string;

  @Column({ length: 50 })
  comment: string;

  @Column({ length: 50 })
  link: string;

  @Column({ length: 50 })
  status: string;

  @ManyToOne(() => Event, (event_id: Event) => event_id.record)
  event_id: Event;

}
