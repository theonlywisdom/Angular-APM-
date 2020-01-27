import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html', styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  //add the Input() decorator to the rating property to expose it
  // to the star component's container
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
  }
}