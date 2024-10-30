import { Routes } from '@angular/router';
import { resolvePokedex } from './resolver/pokedex-resolver';
import { resolvePokemonDetails } from './resolver/pokemon-details-resolver';

export const routes: Routes = [
  {
    path: 'generation/:id',
    loadComponent: () =>
      import(
        './pages/page-pokemon-generation/page-pokemon-generation.component'
      ).then((m) => m.PagePokemonGenerationComponent),
    resolve: {
      pokedex: resolvePokedex,
    },
  },
  {
    path: 'pokemon/:id',
    loadComponent: () =>
      import('./pages/page-pokemon-details/page-pokemon-details.component'),
    resolve: {
      pokemonDetails: resolvePokemonDetails,
    },
  },
  {
    path: '**',
    redirectTo: 'generation/kanto',
  },
];
