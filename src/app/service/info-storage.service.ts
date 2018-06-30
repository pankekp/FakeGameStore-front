import {Injectable} from '@angular/core';
import {User} from '../pojo/user';

@Injectable({
  providedIn: 'root'
})
export class InfoStorageService {

  public saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public clearUser(): void {
    localStorage.clear();
  }
}
