import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutModule } from './modules/about/about.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    FormsModule,
    DataModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      loaderId: 'loader-principal',
      showForeground: true,
      // exclude: [''],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
