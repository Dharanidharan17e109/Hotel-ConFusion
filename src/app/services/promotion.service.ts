import { Injectable } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { Promotion } from '../shared/promotion';
import { Observable, of } from "rxjs";
import { delay,map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }

  getPromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  getPromotion(id):Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'promotions/'+ id);
  }

  getfeaturedPromotion():Observable<Promotion>{
    return this.http.get<Promotion>(baseURL+'promotions?featured=true')
    .pipe(map( promotions=>promotions[0]));
  }


}
