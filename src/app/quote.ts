export class Quote {
    id: number;
    quote: string;
    upvotes: number;
    downvotes: number;
    completeDate: Date;
    constructor(id:number, quote:string, upvotes:number, downvotes:number, completeDate: Date){
    this.id=id;
    this.quote=quote;
    this.upvotes=upvotes;
    this.downvotes=downvotes;
    // this.completeDate=Date;
    }
}
