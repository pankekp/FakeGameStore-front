import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../pojo/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<any> {
    const params = new HttpParams()
      .set('username', String(user.username))
      .set('password', String(user.password));
    return this.http.get<any>(environment.url + 'login', {params: params});
  }
}
