import { Component } from '@angular/core';
import games from '../../../assets/games.json';
import { Game } from '../../models/game';
import { GameCard } from '../game-card/game-card';

@Component({
  selector: 'app-game-list',
  imports: [GameCard],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  protected readonly games: Game[] = games;
}
