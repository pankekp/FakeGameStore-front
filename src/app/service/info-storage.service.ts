import {Injectable} from '@angular/core';
import {User} from '../pojo/user';
import {CartItem} from '../pojo/cart-item';

@Injectable({
  providedIn: 'root'
})
export class InfoStorageService {

  public saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public clearUser(): void {
    localStorage.clear();
  }

  public saveCart(cart: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  public getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart'));
  }
}
