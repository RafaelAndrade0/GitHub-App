import { Component, Input, OnInit } from '@angular/core';
import { Star } from '@data/types/star';

@Component({
  selector: 'app-star-card',
  templateUrl: './star-card.component.html',
  styleUrls: ['./star-card.component.css'],
})
export class StarCardComponent implements OnInit {
  @Input() star: Star;

  constructor() {}

  ngOnInit(): void {}
}
