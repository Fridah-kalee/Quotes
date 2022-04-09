import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[]=[
     new Quote(1, 'Believe you can and you are halfway there', 0, 0, new Date(15,3,2019)),
     new Quote(2, 'You were born to be real ,not to be perfect', 0, 0, new Date(23,1,2012)),
     new Quote(3, 'Just do it', 0, 0, new Date(19,5,2014)),
     new Quote(4, 'Be the light', 0, 0,new Date(16,3,2013)),
     new Quote(5, 'Start your day with happiness and gratitude', 0, 0, new Date(25,3,2009))
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
