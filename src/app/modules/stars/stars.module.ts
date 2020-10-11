import { NgModule } from '@angular/core';

import { StarsRoutingModule } from './stars-routing.module';
import { StarsComponent } from './page/stars.component';
import { StarCardComponent } from './page/star-card/star-card.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [StarsComponent, StarCardComponent],
  imports: [StarsRoutingModule, SharedModule],
})
export class StarsModule {}
