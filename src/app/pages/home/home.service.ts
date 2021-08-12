import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _characters = new BehaviorSubject<any>(null);

  constructor(private rickAndMortyService: RickAndMortyService) {}

  homes = [1, 2, 3];

  get characters() {
    return this._characters.asObservable();
  }

  fetchCharacters() {
    this.rickAndMortyService.getCharacters().subscribe((res) => {
      this._characters.next(res);
    });
  }
}
