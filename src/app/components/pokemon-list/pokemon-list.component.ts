import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokemonGeneration } from '../../model/pokemon';

@Component({
  standalone: true,
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  imports: [AsyncPipe],
})
export class PokemonListComponent {
  public generation = input.required<PokemonGeneration>();
}
