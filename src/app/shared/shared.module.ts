import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazyImage/lazyImage.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, LazyImageComponent],
  exports: [SidebarComponent, HeaderComponent, LazyImageComponent], // exportamos para poder usar en otros modulos
  imports: [CommonModule],
})
export class SharedModule {}
