import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Page} from '../pojo/page';
import {Games} from '../pojo/games';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private http: HttpClient) {
  }

  getGames(page: Page): Observable<Games> {
    const params = new HttpParams()
      .set('pageNum', String(page.pageNum))
      .set('pageSize', String(page.pageSize));
    return this.http.get<Games>(environment.url + 'findGames', {params});
  }
}
