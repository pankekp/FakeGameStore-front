import {Component, OnInit} from '@angular/core';
import {CartItem} from '../pojo/cart-item';
import {UserService} from '../service/user.service';
import {InfoStorageService} from '../service/info-storage.service';
import {User} from '../pojo/user';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  private user: User;

  constructor(private userService: UserService,
              private infoStorageService: InfoStorageService,
              private messageService: NzMessageService) {
    this.cartItems = null;
    this.user = this.infoStorageService.getUser();
  }

  ngOnInit() {
    const user: User = {
      id: this.user.id,
      username: '',
      password: ''
    };
    this.userService.getCart(user)
      .subscribe(
        (data) => {
          this.cartItems = data;
          this.infoStorageService.saveCart(this.cartItems);
        }
      );
  }

  deleteCartItem(cartItemId: number) {
    this.userService.deleteCart(cartItemId)
      .subscribe(
        (data) => {
          this.cartItems = this.cartItems.filter((cartItem) => cartItem.itemId !== cartItemId);
          this.infoStorageService.saveCart(this.cartItems);
          this.messageService.create('success', data.title);
        },
        (error) => {
          this.messageService.create('error', error);
        }
      );
  }

  submitChange() {
    console.dir(this.cartItems);
    this.userService.updateCart(this.cartItems)
      .subscribe(
        (data) => {
          this.infoStorageService.saveCart(this.cartItems);
          this.messageService.create('success', data.title);
        },
        (error) => {
          this.messageService.create('error', error);
        }
      );
  }

  next() {

  }
}
