// import { Event } from '../entities/event.entity';

export class RecordDto {
    id: number;
    document_type: string;
    from: string;
    to: string;
    subject : string;
    comment : string;
    link : string;
    status : string;
    event_id : number;
}
