import {Component, OnInit} from '@angular/core';
import {GoodService} from '../service/good.service';
import {Game} from '../pojo/game';
import {Page} from '../pojo/page';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-good-show',
  templateUrl: './good-show.component.html',
  styleUrls: ['./good-show.component.css']
})
export class GoodShowComponent implements OnInit {

  games: Game[];
  total: number;
  page: Page;

  constructor(private goodService: GoodService) {
    this.page = {
      pageNum: 1,
      pageSize: 8
    };
  }

  ngOnInit() {
    this.getGamesByPage(this.page);
  }

  getGamesByPage(page: Page) {
    return this.goodService.getGames(page)
      .subscribe(
        (response) => {
          response.games.map((game) => game.cover = environment.imgUrl + game.cover + '.jpg');
          this.games = response.games;
          this.total = response.total;
        }
      );
  }

}
