import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PokemonDetails } from '../model/pokemon-details';
import { PokemonService } from '../services/pokemon.service';

export const resolvePokemonDetails: ResolveFn<PokemonDetails> = (
  route: ActivatedRouteSnapshot
) =>
  firstValueFrom(inject(PokemonService).getPokemonDetails(route.params['id']));
