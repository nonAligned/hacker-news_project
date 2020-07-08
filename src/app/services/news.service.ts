import { Item } from './../model/item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL: string = "https://hacker-news.firebaseio.com/v0/";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopStoriesIds(): Observable<Array<number>> {
    return this.http.get<Array<number>>(URL + "topstories.json").pipe(map(data => {
      let idList: Array<number> = [];
      data.forEach(elem => idList.push(elem));
      return idList;
    }));
  }

  getItemById(id): Observable<Item> {
    return this.http.get(URL + "item/" + id + ".json").pipe(map(data => {
      return new Item(data);
    }));
  }

}
