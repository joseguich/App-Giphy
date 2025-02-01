import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchBoxComponent,
    HomePageComponent,
    CardListComponent,
    CardComponent,
  ],
  exports: [SearchBoxComponent, HomePageComponent],
  imports: [CommonModule, SharedModule],
})
export class GifsModule {}
