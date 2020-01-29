import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html', styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  //add the Input() decorator to the rating property to expose it
  // to the star component's container
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }

  onClick(): void {
    //raise the clicked event to the product.list.component container
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}