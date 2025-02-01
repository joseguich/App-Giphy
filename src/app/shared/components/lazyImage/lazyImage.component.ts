import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public title: string = 'No title';

  public loadLoaders: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property required');
  }

  loaders(): void {
    console.log('Lazy Image');
    this.loadLoaders = true;
  }
}
