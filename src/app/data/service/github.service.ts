import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Root } from '@data/types/root';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '@data/types/item';
import { Repo } from '@data/types/repo';
import { Star } from '@data/types/star';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private _users = new BehaviorSubject<Item[]>(undefined);
  $users = this._users.asObservable();

  private _repos = new BehaviorSubject<Repo[]>(undefined);
  $repos = this._repos.asObservable();

  private _stars = new BehaviorSubject<Star[]>(undefined);
  $stars = this._stars.asObservable();

  private _actualUser = new BehaviorSubject<Item>(undefined);
  $actualUser = this._actualUser.asObservable();

  constructor(private http: HttpClient) {}

  setUsers(itens: Item[]): void {
    this._users.next(itens);
  }

  setRepos(repos: Repo[]): void {
    this._repos.next(repos);
  }

  setStars(stars: Star[]): void {
    this._stars.next(stars);
  }

  setActualUser(user: Item) {
    this._actualUser.next(user);
  }

  searchUsers(search: string): Observable<Item[]> {
    return this.http
      .get<Root>(`search/users?q=${search}`)
      .pipe(map((res) => res.items));
  }

  searchUserRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`users/${username}/repos`);
  }

  listStargazers(username: string): Observable<Star[]> {
    return this.http.get<Star[]>(`users/${username}/starred`);
  }
}
