import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { SearchComponent } from './page/search/search.component';
import { UserCardComponent } from './page/user-card/user-card.component';
import { UsersComponent } from './page/users/users.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    UserCardComponent,
    UsersComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
