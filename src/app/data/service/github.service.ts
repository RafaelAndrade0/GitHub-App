import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Root } from '@data/types/root';
import { BehaviorSubject } from 'rxjs';
import { Item } from '@data/types/item';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private _users = new BehaviorSubject<Item[]>(undefined);
  $users = this._users.asObservable();

  constructor(private http: HttpClient) {}

  setUsers(itens: Item[]) {
    this._users.next(itens);
  }

  searchUsers(search: string) {
    return this.http
      .get<Root>(`search/users?q=${search}`)
      .pipe(map((res) => res.items));
  }

  searchUserRepos(username: string) {
    return this.http.get(`users/${username}/repos`);
  }

  listStargazers(username: string) {
    return this.http.get(`users/${username}/starred`);
  }
}
