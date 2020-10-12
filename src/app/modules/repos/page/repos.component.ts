import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '@data/service/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  constructor(
    private githubService: GithubService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  $repos = this.githubService.$repos;
  $actualUser = this.githubService.$actualUser;

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
