import { Component, OnInit } from '@angular/core';
import { GithubService } from '@data/service/github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  $users = this.githubService.$users;
  page: number = 1;

  ngOnInit(): void {}
}
