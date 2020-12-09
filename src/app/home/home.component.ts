import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { DishService} from '../services/dish.service';
import { PromotionService} from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  dishErrMess:string;
  leaderErrMess:string;
  promoErrMess:string;

  constructor(private dishService:DishService,private promotionService:PromotionService,private leaderService:LeaderService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
   this.dishService.getfeatureDish().subscribe((dish)=>this.dish=dish,
   disherrmsg=>this.dishErrMess=<any>disherrmsg);
   
    this.promotionService.getfeaturedPromotion().subscribe((promotion)=>this.promotion=promotion,
    promoerrmsg=>this.promoErrMess=<any>promoerrmsg);

    this.leaderService.getfeaturedLeader().subscribe((leader)=>this.leader=leader,
    leadererrmsg=>this.leaderErrMess=<any>leadererrmsg);
  }

}
