import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokedex } from '../../model/pokemon';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  imports: [DecimalPipe, RouterLink],
})
export class PokemonListComponent {
  public pokedex = input.required<Pokedex>();
}
