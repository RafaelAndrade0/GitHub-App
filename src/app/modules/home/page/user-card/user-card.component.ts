import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '@data/service/github.service';
import { Item } from '@data/types/item';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(
    private githubService: GithubService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() user: Item;

  ngOnInit(): void {}

  showReposPerUser() {
    this.githubService.searchUserRepos(this.user.login).subscribe((repos) => {
      this.githubService.setRepos(repos);
      this.router.navigate(['../repos'], { relativeTo: this.route });
    });
  }

  listStargazers() {
    this.githubService.listStargazers(this.user.login).subscribe(console.log);
  }
}
