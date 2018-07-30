import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../pojo/user';
import {Cart} from '../pojo/cart';
import {C} from '@angular/core/src/render3';
import {CartItem} from '../pojo/cart-item';
import {Success} from '../pojo/success';
import {ContactInfo} from '../pojo/contact-info';
import {Orders} from '../pojo/orders';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<User> {
    const params = new HttpParams()
      .set('username', String(user.username))
      .set('password', String(user.password));
    return this.http.get<User>(environment.url + 'login', {params: params});
  }

  findUsername(username: string): Observable<User> {
    const params = new HttpParams()
      .set('username', String(username));
    return this.http.get<User>(environment.url + 'findUsername', {params: params});
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.url + 'register', user);
  }

  addToCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(environment.url + 'addToCart', cart);
  }

  getCart(user: User): Observable<CartItem[]> {
    const params = new HttpParams()
      .set('id', String(user.id));
    return this.http.get<CartItem[]>(environment.url + 'getCart', {params: params});
  }

  updateCart(cartItems: CartItem[]): Observable<Success> {
    return this.http.put<Success>(environment.url + 'updateCart', cartItems);
  }

  deleteCart(cartItemId: number): Observable<Success> {
    return this.http.delete<Success>(environment.url + 'deleteCart/' + cartItemId);
  }

  addOrder(userId: number, contactInfo: ContactInfo): Observable<Success> {
    const obj = {
      userId: userId,
      contactInfo: contactInfo
    };
    console.dir(obj);
    return this.http.post<Success>(environment.url + 'addOrder', obj);
  }

  getOrder(userId: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(environment.url + 'getOrder/' + userId);
  }
}
