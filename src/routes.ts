import { Routes } from '@angular/router';

import { MenuComponent } from './app/menu/menu.component';
import { DishdetailComponent } from './app/dishdetail/dishdetail.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'contact', component:ContactComponent},
  { path: 'about', component:AboutComponent},
  { path: 'dishdetail/:id',     component: DishdetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];