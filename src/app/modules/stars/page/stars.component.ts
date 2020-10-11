import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '@data/service/github.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
  constructor(
    private githubService: GithubService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  $stars = this.githubService.$stars;
  $actualUser = this.githubService.$actualUser;

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
