import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInfoShareService} from '../service/user-info-share.service';
import {User} from '../pojo/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userInfoShareService: UserInfoShareService) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      const user = {
        id: 1,
        username: this.loginForm.value.username
      };
      this.userInfoShareService.updateUserInfo(user);
    } else {
      for (const key of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
