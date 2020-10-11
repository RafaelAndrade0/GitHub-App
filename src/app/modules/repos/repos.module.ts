import { NgModule } from '@angular/core';

import { ReposRoutingModule } from './repos-routing.module';

import { ReposComponent } from './page/repos.component';
import { RepoCardComponent } from './page/repo-card/repo-card.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ReposComponent, RepoCardComponent],
  imports: [ReposRoutingModule, SharedModule],
})
export class ReposModule {}
