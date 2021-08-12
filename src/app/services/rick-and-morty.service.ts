import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
