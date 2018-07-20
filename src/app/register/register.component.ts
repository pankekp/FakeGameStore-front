import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {concatMap, debounceTime, distinctUntilChanged, map, mergeAll, mergeMap, switchMap} from 'rxjs/operators';
import {UserService} from '../service/user.service';
import {observable, Observable, Observer, of} from 'rxjs';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private messageService: NzMessageService) {
    this.registerForm = this.fb.group({
      username: [null,
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)],
        [this.repeatedValidator.bind(this)]],
      password: [null,
        [Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)]],
      checkPassword: [null,
        [Validators.required,
          this.confirmationValidator.bind(this)]]
    });
  }

  updateConfirmValidator(): void {
    Promise.resolve()
      .then(
        () => this.registerForm.controls.checkPassword.updateValueAndValidity()
      );
  }

  confirmationValidator(control: FormControl): any {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.registerForm.controls.password.value) {
      return {confirm: true};
    }
  }

  repeatedValidator(control: FormControl): any {
    return Observable.create((observer: Observer<ValidationErrors>) => {
        return control.valueChanges
          .pipe(
            debounceTime(1000),
            switchMap(
              () => {
                console.log(control.value);
                return this.userService.findUsername(control.value);
              }
            )
          )
          .subscribe(
            (user) => {
              console.log(user);
              if (user !== null) {
                observer.next({repeated: true});
              } else {
                observer.next(null);
              }
              observer.complete();
            }
          );
      }
    );
  }

  ngOnInit() {
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value)
        .subscribe(
          () => {
            this.messageService.create('success', 'Register successfully');
            this.router.navigate(['/home']);
          },
          (error) => {
            this.messageService.create('error', error);
          }
        );
    } else {
      for (const key of Object.keys(this.registerForm.controls)) {
        this.registerForm.controls[key].markAsDirty();
        this.registerForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
