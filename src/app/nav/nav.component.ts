import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../pojo/user';
import {UserInfoShareService} from '../service/user-info-share.service';
import {Observable, Observer, Subscription} from 'rxjs';
import {InfoStorageService} from '../service/info-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  user: User;
  private userSubscription: Subscription;

  constructor(private userInfoShareService: UserInfoShareService,
              private infoStorageService: InfoStorageService) {
    this.user = {
      id: 0,
      username: ''
    };
    if (this.infoStorageService.getUser() != null) {
      this.user = this.infoStorageService.getUser();
    }
    // 不影响组件初始化
    this.userSubscription = userInfoShareService.getUserInfo()
      .subscribe((user) => this.user = user);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  login() {

  }

  logout() {
    this.infoStorageService.clearUser();
    this.userInfoShareService.clearUserInfo();
  }
}
