import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input()
  public gif!: Gifs;
}
