import { Injectable } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions():Promise<Promotion[]>{
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id):Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=>(promo.id===id))[0]);
  }

  getfeaturedPromotion():Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=>promo.featured)[0]);
  }


}
