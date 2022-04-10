import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[]=[
     new Quote(1, 'fridah', 'fridah', 'Believe you can and you are halfway there', 0, 0),
     new Quote(2, 'fridah', 'fridah', 'You were born to be real ,not to be perfect', 0, 0),
     new Quote(3, 'fridah', 'fridah', 'Just do it', 0, 0),
     new Quote(4, 'fridah', 'fridah', 'Be the light', 0, 0),
     new Quote(5, 'fridah', 'fridah', 'Start your day with happiness and gratitude', 0, 0)
   ]
  arr: number[]= this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)

  // addNewTask(task){
  //   let taskLength =this.tasks.length;
  //   task.id =taskLength+1;
  //   task.completeDate =new Date(task.completeDate)
  //   this.tasks.push(task)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
