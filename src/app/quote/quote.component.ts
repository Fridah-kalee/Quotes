import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[]=[
     new Quote(1, 'fridah', 'fridah', 'Believe you can and you are halfway there', 0, 0, new Date(15,4,2005)),
     new Quote(2, 'fridah', 'fridah', 'You were born to be real ,not to be perfect', 0, 0, new Date(15,4,2005)),
     new Quote(3, 'fridah', 'fridah', 'Just do it', 0, 0, new Date(15,4,2005)),
     new Quote(4, 'fridah', 'fridah', 'Be the light', 0, 0, new Date(15,4,2005)),
     new Quote(5, 'fridah', 'fridah', 'Start your day with happiness and gratitude', 0, 0, new Date(15,4,2005))
   ]
  arr: number[]= this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)

  upvotes=0;
  downvotes=0;

  toggleDetails(index){
    this.quotes[index].showQuote=! this.quotes[index].showQuote
  }

  upVote(index){
    var up = this.quotes[index].upvote+1;
    this.quotes[index].upvote=up;
  }
  
  downVote(index){
    var down = this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
    
  }
  deleteQuote(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
