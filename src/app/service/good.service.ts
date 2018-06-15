import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Game} from '../pojo/game';
import {environment} from '../../environments/environment';
import {Page} from '../pojo/page';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private http: HttpClient) {
  }

  getGames(page: Page): Observable<Game[]> {
    const params = new HttpParams()
      .set('pageNum', String(page.pageNum))
      .set('pageSize', String(page.pageSize));
    return this.http.get<Game[]>(environment.url + 'findGames', {params});
  }
}
