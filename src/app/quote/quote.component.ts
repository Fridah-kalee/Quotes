import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] =[
     new Quote(1, 'Martin Luther King jr', 'Martin Luther King jr', 'The time is always right to do what is right',0,0, new Date(15,4,2015)),
     new Quote(2, 'Chinua Achebe', 'Chinua Achebe', 'If you dont like someones story, write your own',0,0, new Date(15,4,2010)),
     new Quote(3, 'Bill Gates', 'Bill Gates', 'If you are born poor it is not your mistake, but if you die poor it is your mistake', 0, 0,new Date(15,4,2000)),
     new Quote(4, 'Arthur C. Clarke ', 'Arthur C. Clarke ', 'Any sufficiently advanced technology is equivalent to magic', 0, 0,new Date(15,4,2009)),
     new Quote(5, 'Oprah Winfrey', 'Oprah Winfrey', 'The greatest discovery of all time is that a person can change his future by merely changing his attitude', 0, 0,new Date(15,4,2010)),
   ];
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
    quote.createdDate = new Date(quote.createdDate);
    this.quotes.push(quote)
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
