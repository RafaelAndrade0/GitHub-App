import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '@data/service/github.service';
import { Item } from '@data/types/item';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  @Input() user: Item;

  ngOnInit(): void {}

  showReposPerUser() {
    this.githubService.searchUserRepos(this.user.login).subscribe(console.log);
  }

  listStargazers() {
    this.githubService.listStargazers(this.user.login).subscribe(console.log);
  }
}
