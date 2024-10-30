import { Component, input } from '@angular/core';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { Pokedex } from '../../model/pokedex';

@Component({
  selector: 'app-page-pokemon-generation',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './page-pokemon-generation.component.html',
  styleUrl: './page-pokemon-generation.component.scss',
})
export class PagePokemonGenerationComponent {
  pokedex = input.required<Pokedex>();
}
