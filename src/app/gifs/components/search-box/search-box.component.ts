import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  template: `
    <h4 class="font-bold text-xl px-2 my-2">Buscar:</h4>
    <div class="mx-2">
      <input
        type="text"
        placeholder="Buscar gifs..."
        class="w-full px-2 py-2 rounded-lg border border-gray-300 outline-none"
        (keyup.enter)="searchGifs()"
        #txtInputValue
      />
    </div>
  `,
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtInputValue')
  public inputTag!: ElementRef<HTMLInputElement>;

  searchGifs(): void {
    const tag = this.inputTag.nativeElement.value;
    this.gifsService.searchGifs(tag);

    // Clear Input.
    this.inputTag.nativeElement.value = '';
  }
}
