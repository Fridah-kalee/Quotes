export class Quote {
    showQuote: boolean;
    constructor(
        public id: number,
        public name: string,
        public author: string,
        public quote: string,
        public upvote: number,
        public downvote: number,
        public completeDate:Date
    ){
        this.showQuote=false;
}
}
