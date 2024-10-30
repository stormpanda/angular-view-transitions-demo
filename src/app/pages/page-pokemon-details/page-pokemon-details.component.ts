import { Component, input } from '@angular/core';
import { PokemonDetailsComponent } from '../../components/pokemon-details/pokemon-details.component';
import { PokemonDetails } from '../../model/pokemon';

@Component({
  selector: 'app-page-pokemon-details',
  standalone: true,
  imports: [PokemonDetailsComponent],
  templateUrl: './page-pokemon-details.component.html',
  styleUrl: './page-pokemon-details.component.scss',
})
export default class PagePokemonDetailsComponent {
  pokemonDetails = input.required<PokemonDetails>();
}
