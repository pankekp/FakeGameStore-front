import {Component, OnInit} from '@angular/core';
import {GoodService} from '../service/good.service';
import {Game} from '../pojo/game';
import {Observable} from 'rxjs';
import {Page} from '../pojo/page';

@Component({
  selector: 'app-good-show',
  templateUrl: './good-show.component.html',
  styleUrls: ['./good-show.component.css']
})
export class GoodShowComponent implements OnInit {

  private gamesStream: Observable<Game[]>;
  games: Array<Game>;
  private page: Page;

  constructor(private goodService: GoodService) {
    this.page = {pageNum: 1, pageSize: 8};
    this.gamesStream = this.goodService.getGames(this.page);
  }

  ngOnInit() {
    this.gamesStream.subscribe(
      (data) => this.games = data
    );
  }

}
