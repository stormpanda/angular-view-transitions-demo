import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonGeneration } from '../../model/pokemon';

@Component({
  selector: 'app-page-pokemon-generation',
  standalone: true,
  imports: [PokemonListComponent, AsyncPipe],
  templateUrl: './page-pokemon-generation.component.html',
  styleUrl: './page-pokemon-generation.component.scss',
})
export class PagePokemonGenerationComponent {
  generation = input.required<PokemonGeneration>();
}
