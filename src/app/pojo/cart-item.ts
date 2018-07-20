import {Game} from './game';

export interface CartItem {
  game: Game;
  gameNum: number;
  itemId: number;
}
