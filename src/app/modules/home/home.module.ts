import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { SearchComponent } from './page/search/search.component';
import { UserCardComponent } from './page/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './page/users/users.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    UserCardComponent,
    UsersComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, NgxPaginationModule],
})
export class HomeModule {}
