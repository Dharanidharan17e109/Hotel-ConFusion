import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg:String;


  constructor(private dishService:DishService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((dishes)=>{this.dishes=dishes;},
    errMsg=> this.errMsg = <any>errMsg);
  }

  

}
