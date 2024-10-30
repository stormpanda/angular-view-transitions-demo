import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokemonDetails } from '../../model/pokemon-details';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  pokemonDetails = input.required<PokemonDetails>();
}
