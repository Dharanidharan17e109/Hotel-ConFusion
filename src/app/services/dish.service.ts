import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes():Dish[]{
    return DISHES;    
  }

  getDish(id):Dish{
    return DISHES.filter((dish)=>(dish.id===id))[0];
  }

  getfeatureDish():Dish{
    return DISHES.filter((dish)=>dish.featured)[0];
  }
}
