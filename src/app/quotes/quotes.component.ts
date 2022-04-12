import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes(1, 'Sansa Stark','Jojo','The lone wolf dies but the pack survives',new Date(2021,10,4)),
    new Quotes(2,'Tyrion Lannister','Bre','A mind needs books like a sword needs a whetstone ',new Date(2021,10,4)),
    new Quotes(3,'Daenerys Targaryen','Dennis','We are going to leave the world better than we found it.',new Date(2021,10,4)),
  ];
  toggleDetails(index: number){
    this.quote[index].showauthor = !this.quote[index].showauthor;
  }
  deleteQuote(isComplete: any, index:  number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quotes){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
