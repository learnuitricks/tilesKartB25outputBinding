import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating;

  @Output() ratingUpdated:EventEmitter<string> = new EventEmitter();
  ratingWidth:number;
  ratingArray:[]
  constructor() { }

  ngOnInit() {
    console.log("rating recevied is" + this.rating);
  }

  ngOnChanges(){
    this.ratingWidth = this.rating * 85/5;

  }

  starUpdated(newRating){
    console.log(`new rating is ${newRating}`);

  this.ratingUpdated.emit(newRating);

  }

}
