import {Component, OnInit} from '@angular/core';
import {Orders} from '../pojo/orders';
import {UserService} from '../service/user.service';
import {InfoStorageService} from '../service/info-storage.service';
import {User} from '../pojo/user';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  ordersList: Orders[];
  private user: User;

  constructor(private userService: UserService,
              private infoStorageService: InfoStorageService) {
    this.ordersList = null;
    this.user = this.infoStorageService.getUser();
  }

  ngOnInit() {
    this.userService.getOrder(this.user.id)
      .subscribe(
        (data) => {
          this.ordersList = data;
          this.ordersList.map((order) => order.ordersTime.orderTime = this.parseTimestamp(order.ordersTime.orderTime));
          console.dir(this.ordersList);
        }
      );
  }

  parseTimestamp(timeStamp: string): string {
    const date = new Date(timeStamp);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
    const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
    const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }

}
