import { Event } from '../entities/event.entity';

export class CreateCompensationEventDto {
    id: number;
    event_type: string;
    commercial_owner: string;
    operational_owner: string;
    record_supporter : string;
    event_id : Event;
}
