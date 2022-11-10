export class CreateEventDto {
    id: number;
    user: string;
    subject: string;
    remark: string;
    source: string;
    reference: string;
    location:string;
    issuedBy : string;
    dateOfAwareness: string;
}
