import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../pojo/user';
import {Cart} from '../pojo/Cart';
import {C} from '@angular/core/src/render3';

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
}
