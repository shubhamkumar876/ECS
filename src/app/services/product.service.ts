import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../common/books';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json'; 

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}

interface GetResponseBooks {

  books: Books[];
}
