import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService } from '@data/service/github.service';
import { Item } from '@data/types/item';
import { Slicer } from '@data/types/slicer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private githubService: GithubService) {}

  showMoreBtn = false;
  subscription = new Subscription();
  slicedUsers: Slicer<Item>;

  ngOnInit(): void {
    this.startTrackingUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startTrackingUsers() {
    this.subscription = this.githubService.$users.subscribe((users) => {
      this.slicedUsers = new Slicer(users);
      this.slicedUsers.clear();
    });
  }

  showMore() {
    this.slicedUsers.showMore();
  }
}
