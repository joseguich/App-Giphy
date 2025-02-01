import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  standalone: false,

  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gifs[] = [];

  public notData: string = 'No hay datos';
}
