import { Component, input } from '@angular/core';
import { PokemonDetails } from '../../model/pokemon';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  pokemonDetails = input.required<PokemonDetails>();
}
