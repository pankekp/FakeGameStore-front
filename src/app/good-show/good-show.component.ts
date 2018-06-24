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
  pageSizeOptions: number[];

  constructor(private goodService: GoodService) {
    this.page = {
      pageNum: 1,
      pageSize: 8
    };
    this.pageSizeOptions = [4, 8, 12];
  }

  ngOnInit() {
    this.getGamesByPage(this.page);
  }

  getGamesByPage(page: Page) {
    return this.goodService.getGames(page)
      .subscribe(
        (data) => {
          data.games.map((game) => game.cover = environment.imgUrl + game.cover + '.jpg');
          this.games = data.games;
          this.total = data.total;
        }
      );
  }

  pageIndexChange(index: number) {
    this.page.pageNum = index;
    this.getGamesByPage(this.page);
  }

  pageSizeChange(size: number) {
    this.page.pageSize = size;
  }

}
