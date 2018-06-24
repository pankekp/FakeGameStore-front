import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../pojo/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoShareService {

  private subject: Subject<User>;
  private logoutUser: User;

  constructor() {
    this.subject = new Subject<User>();
    this.logoutUser = {
      username: ''
    };
  }

  updateUserInfo(user: User): void {
    this.subject.next(user);
  }

  clearUserInfo(): void {
    this.subject.next(this.logoutUser);
  }

  getUserInfo(): Observable<User> {
    return this.subject.asObservable();
  }
}
