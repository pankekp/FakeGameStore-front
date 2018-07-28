import {Component, OnInit} from '@angular/core';
import {User} from '../pojo/user';
import {CartItem} from '../pojo/cart-item';
import {InfoStorageService} from '../service/info-storage.service';
import {UserService} from '../service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  cartItems: CartItem[];
  private user: User;
  total: number;
  contactInfoForm: FormGroup;

  constructor(private userService: UserService,
              private infoStorageService: InfoStorageService,
              private fb: FormBuilder,
              private router: Router) {
    this.cartItems = null;
    this.user = this.infoStorageService.getUser();
    this.total = 0;
    this.contactInfoForm = this.fb.group({
      name: [null,
        [Validators.required]],
      phone: [null,
        [Validators.required,
          Validators.pattern('^1[0-9]{10}$')]],
      address: [null,
        [Validators.required]],
      postcode: [null,
        [Validators.required,
          Validators.pattern('^[0-9]{6}$')]]
    });
  }

  ngOnInit() {
    const user: User = {
      id: this.user.id,
      username: '',
      password: ''
    };
    if (this.infoStorageService.getCart() != null) {
      this.cartItems = this.infoStorageService.getCart();
    } else {
      this.userService.getCart(user)
        .subscribe(
          (data) => {
            this.cartItems = data;
            this.infoStorageService.saveCart(this.cartItems);
          }
        );
    }
    this.cartItems.map((cartItem) => cartItem.itemTotal = cartItem.gameNum * cartItem.game.price);
    console.dir(this.cartItems);
    this.cartItems.forEach((cartItem) => this.total += cartItem.itemTotal);
  }

  submitForm(): void {
    if (this.contactInfoForm.valid) {
      console.dir(this.contactInfoForm.value);
      this.userService.addOrder(this.user.id, this.contactInfoForm.value)
        .subscribe(
          () => {
            this.infoStorageService.saveCart(null);
            this.router.navigate(['/confirmEnd']);
          }
        );
    } else {
      for (const key of Object.keys(this.contactInfoForm.controls)) {
        this.contactInfoForm.controls[key].markAsDirty();
        this.contactInfoForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
