import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CompensationEvent }  from '../entities/compensation_event.entity';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  user: string;

  @Column({ length: 50 })
  subject: string;

  @Column({ length: 50 })
  remark: string;

  @Column({ length: 50 })
  source: string;

  @Column()
  reference: string;

  @Column()
  location: string;

  @Column()
  issuedBy: string;

  @Column()
  dateOfAwareness: string;

  @OneToMany(() => CompensationEvent, (compensation_event: CompensationEvent) => compensation_event.event_id)
  compensation_event: CompensationEvent[];
}
