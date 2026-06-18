import { Routes } from '@angular/router';
import { GameList } from './components/game-list/game-list';
import { GameDetail } from './components/game-detail/game-detail';

export const routes: Routes = [
    {path: '', component: GameList},
    {path: 'games/:id', component: GameDetail},
];
