import { Injectable } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Observable<Promotion[]>{
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id):Observable<Promotion>{
    return of(PROMOTIONS.filter((promo)=>(promo.id===id))[0]).pipe(delay(2000));
  }

  getfeaturedPromotion():Observable<Promotion>{
    return of(PROMOTIONS.filter((promo)=>promo.featured)[0]).pipe(delay(2000));
  }


}
