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
    return new Promise((resolve)=>{
      setTimeout(()=>{resolve(PROMOTIONS);},2000);
    });
  }

  getPromotion(id):Promise<Promotion>{
    return new Promise((resolve)=>{
      setTimeout(()=>{resolve(PROMOTIONS.filter((promo)=>(promo.id===id))[0]);},2000);
    });
  }

  getfeaturedPromotion():Promise<Promotion>{
    return new Promise((resolve)=>{
      setTimeout(()=>{resolve(PROMOTIONS.filter((promo)=>promo.featured)[0]);},2000);
    });
  }


}
