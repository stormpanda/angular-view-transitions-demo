import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonGeneration } from '../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl: string = 'https://pokeapi.co/api/v2';
  private readonly generationUrl: string = `${this.baseUrl}/generation`;

  constructor(private http: HttpClient) {}

  public getPokemonGeneration(
    generation: number
  ): Observable<PokemonGeneration> {
    return this.http.get<PokemonGeneration>(
      `${this.generationUrl}/${generation}`
    );
  }
}
