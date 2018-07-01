import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInfoShareService} from '../service/user-info-share.service';
import {User} from '../pojo/user';
import {UserService} from '../service/user.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userInfoShareService: UserInfoShareService,
              private userService: UserService,
              private messageService: NzMessageService) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe(
          (res) => {
            this.userInfoShareService.updateUserInfo(res);
          },
          (error) => {
            this.messageService.create('error', error);
          }
        );
    } else {
      for (const key of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
