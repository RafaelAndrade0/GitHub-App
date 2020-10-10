import { Owner } from './owner';

export interface Repo {
  name: string;
  full_name: string;
  owner: Owner;
  description?: string;
  url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
}
