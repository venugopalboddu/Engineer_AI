import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht: HttpClient) { }

  ge() {
    return this.ht.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
  }
  po(d) {
    return this.ht.post('http://localhost:3000/posts', d);
  }
}
