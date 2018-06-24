import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInfoShareService} from '../service/user-info-share.service';

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
      console.log(this.loginForm.value);
      this.userInfoShareService.updateUserInfo(this.loginForm.value);
    } else {
      for (const key of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
