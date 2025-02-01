import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsSevice: GifsService) {}

  get historyName(): string[] {
    return this.gifsSevice.gifsHistory;
  }

  onClickGifs(name: string): void {
    this.gifsSevice.searchGifs(name);
  }
}
