import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() count = 5; 
  @Input() rating = 0;

  stars: boolean[] = [];

  ngOnInit(): void {
    for (let i = 0; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
