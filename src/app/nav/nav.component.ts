import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../pojo/user';
import {UserInfoShareService} from '../service/user-info-share.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  user: User;
  private subscription: Subscription;

  constructor(private userInfoShareService: UserInfoShareService) {
    this.user = {
      username: ''
    };
    this.subscription = userInfoShareService.getUserInfo()
      .subscribe((user) => this.user = user);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.userInfoShareService.clearUserInfo();
  }
}
