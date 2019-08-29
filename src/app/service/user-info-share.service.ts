import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../pojo/user';
import {InfoStorageService} from './info-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoShareService {

  private subject: Subject<User>;
  private logoutUser: User;

  constructor(private infoStorageService: InfoStorageService) {
    this.subject = new Subject<User>();
    this.logoutUser = {
      id: 0,
      username: '',
      password: ''
    };
  }

  updateUserInfo(user: User): void {
    this.infoStorageService.saveUser(user);
    this.subject.next(user);
  }

  clearUserInfo(): void {
    this.subject.next(this.logoutUser);
  }

  getUserInfo(): Observable<User> {
    return this.subject.asObservable();
  }
}
