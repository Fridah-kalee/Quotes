import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[]=[
     new Quote(1, 'Believe you can and you are halfway there', 0, 0),
     new Quote(2, 'You were born to be real ,not to be perfect', 0, 0),
     new Quote(3, 'Just do it', 0, 0),
     new Quote(4, 'Be the light', 0, 0),
     new Quote(5, 'Start your day with happiness and gratitude', 0, 0)
   ]
  arr: number[]= this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
