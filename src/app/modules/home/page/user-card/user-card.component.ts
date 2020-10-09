import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@data/types/item';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor() {}

  @Input() user: Item;

  ngOnInit(): void {}

  showReposPerUser() {
    console.log(this.user);
  }
}
