import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './component/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { ErrorRouteComponent } from './component/error-route/error-route.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoaderComponent, ErrorRouteComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    LoaderComponent,
    CommonModule,
    FormsModule,
    ErrorRouteComponent,
    RouterModule,
  ],
})
export class SharedModule {}
