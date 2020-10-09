import { Component, OnInit } from '@angular/core';
import { GithubService } from '@data/service/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  submit(f) {
    this.githubService.searchUsers(f.search).subscribe((users) => {
      this.githubService.setUsers(users);
    });
  }
}
