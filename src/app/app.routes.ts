import { Routes } from '@angular/router';
import { resolveGeneration } from './resolver/generation-resolver';

export const routes: Routes = [
  {
    path: 'generation/:id',
    loadComponent: () =>
      import(
        './pages/page-pokemon-generation/page-pokemon-generation.component'
      ).then((m) => m.PagePokemonGenerationComponent),
    resolve: {
      generation: resolveGeneration,
    },
  },
  {
    path: '**',
    redirectTo: 'generation/1',
  },
];
