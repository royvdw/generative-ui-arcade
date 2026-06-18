import { Component, input } from '@angular/core';
import { Game } from '../../models/game';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  imports: [RouterLink],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  game = input.required<Game>();
}
