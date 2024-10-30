import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PokemonGeneration } from '../model/pokemon';
import { PokemonService } from '../services/pokemon.service';

export const resolveGeneration: ResolveFn<PokemonGeneration> = (
  route: ActivatedRouteSnapshot
) =>
  firstValueFrom(
    inject(PokemonService).getPokemonGeneration(route.params['id'])
  );
