import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Pokedex } from '../model/pokemon';
import { PokemonService } from '../services/pokemon.service';

export const resolvePokedex: ResolveFn<Pokedex> = (
  route: ActivatedRouteSnapshot
) => firstValueFrom(inject(PokemonService).getPokedex(route.params['id']));
