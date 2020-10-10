import { Component, OnInit } from '@angular/core';
import { GithubService } from '@data/service/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private githubService: GithubService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submit(f) {
    if (f.search !== '') {
      this.githubService.searchUsers(f.search).subscribe((users) => {
        this.githubService.setUsers(users);
      });
    } else {
      this.toastr.error('O usuário informado não pode ser vazio!');
    }
  }
}
