import {CartItem} from './cart-item';
import {ContactInfo} from './contact-info';
import {OrdersTime} from './orders-time';

export interface Orders {
  cartItemList: CartItem[];
  contactInfoList: ContactInfo[];
  ordersTime: OrdersTime;
}
