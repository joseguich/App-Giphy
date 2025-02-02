import { Injectable } from '@angular/core';
import { Gifs, GifsApiGihpy } from '../interfaces/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifs: Gifs[] = [];

  private _gifsHistory: string[] = [];
  private _apiKey: string = 'mbNpQbFqDTkMflUPy1AMSa0ZwlX5x8GO';
  private gifsUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get gifsHistory(): string[] {
    return [...this._gifsHistory];
  }

  organizeGifsHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._gifsHistory.includes(tag)) {
      this._gifsHistory = this.gifsHistory.filter((gifs) => gifs !== tag);
    }

    this._gifsHistory.unshift(tag);

    //Eliminar el ultimo elemento de la lista si agregan otro
    this._gifsHistory = this._gifsHistory.splice(0, 10);

    this.saveLocalStorage();
  }
  saveLocalStorage(): void {
    localStorage.setItem('gifsHistory', JSON.stringify(this._gifsHistory));
  }
  searchGifs(tag: string): Observable<Gifs[]> {
    if (!tag || !tag.trim()) {
      return of([]);
    }

    this.organizeGifsHistory(tag);

    // Obtener los parametros.
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', 10);

    const observable = this.http
      .get<GifsApiGihpy>(`${this.gifsUrl}/search`, { params })
      .pipe(map((res) => res.data)); // Pipe para crear un nuevo arreglo para pa petición

    observable.subscribe((data) => {
      this.gifs = data;
    });

    return observable;
  }

  loadLocalStorage(): void {
    if (!localStorage.getItem('gifsHistory')) return;

    this._gifsHistory = JSON.parse(localStorage.getItem('gifsHistory')!);

    if (this._gifsHistory.length === 0) return;

    // Que cargue el primer gifs de la historial
    this.searchGifs(this._gifsHistory[0]);
  }
}
