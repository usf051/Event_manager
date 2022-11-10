import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event }  from '../entities/event.entity';

@Entity({ name: 'compensation_events' })
export class CompensationEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  event_type: string;

  @Column({ length: 50 })
  commercial_owner: string;

  @Column({ length: 50 })
  operational_owner: string;

  @Column({ length: 50 })
  record_supporter: string;

  @ManyToOne(() => Event, (event_id: Event) => event_id.compensation_event)
  event_id: Event;

}
