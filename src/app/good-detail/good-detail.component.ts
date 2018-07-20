import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../pojo/game';
import {mergeMap} from 'rxjs/operators';
import {GoodService} from '../service/good.service';
import {environment} from '../../environments/environment';
import {InfoStorageService} from '../service/info-storage.service';
import {NzMessageService} from 'ng-zorro-antd';
import {UserService} from '../service/user.service';
import {Cart} from '../pojo/cart';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnInit {

  private gameId: number;
  game: Game;
  addNum: number;
  status: string;

  constructor(private routeInfo: ActivatedRoute,
              private goodService: GoodService,
              private userService: UserService,
              private infoStorageService: InfoStorageService,
              private messageService: NzMessageService) {
    this.gameId = 0;
    this.game = null;
    this.addNum = 1;
    this.status = 'init';
  }

  ngOnInit() {
    this.routeInfo.params
      .pipe(
        mergeMap(
          (params) => {
            return params['id'];
          }
        ),
        mergeMap(
          (gameId) => {
            return this.goodService.getGame(Number(gameId));
          }
        )
      )
      .subscribe(
        (game) => {
          game.cover = environment.imgUrl + game.cover + '.jpg';
          this.game = game;
        }
      );
  }

  SelectNum() {
    this.status = 'select';
  }

  SubmitNum() {
    if (this.infoStorageService.getUser() == null) {
      this.messageService.info('Please login');
      this.status = 'init';
      return;
    } else {
      const cart: Cart = {
        userId: this.infoStorageService.getUser().id,
        goodId: this.game.id,
        goodNum: this.addNum
      };
      this.userService.addToCart(cart)
        .subscribe(
          () => {
            this.messageService.info('Add successfully');
          },
          (error) => {
            this.messageService.info(error);
          }
        );
    }
    this.status = 'init';
  }
}
