import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  likes : number = 0;
  dislikes: number = 0;
  likeBtnClick() {
    this.likes++;
  }
  dislikeBtnClick(){
    this.dislikes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}