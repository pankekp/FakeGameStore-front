import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../pojo/user';
import {InfoStorageService} from './info-storage.service';
import {ɵangular_packages_common_common_a} from '@angular/common';
import {a} from '@angular/core/src/render3';
import {el} from '@angular/platform-browser/testing/src/browser_util';

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
      username: ''
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
