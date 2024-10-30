import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex, PokemonDetails } from '../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl: string = 'https://pokeapi.co/api/v2';
  private readonly generationUrl: string = `${this.baseUrl}/pokedex`;

  constructor(private http: HttpClient) {}

  public getPokedex(idOrName: number | string): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.generationUrl}/${idOrName}`);
  }

  public getPokemonDetails(idOrName: number): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(
      `${this.baseUrl}/pokemon-species/${idOrName}`
    );
  }
}
