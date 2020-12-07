import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable, of, pipe } from "rxjs";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient) { }

  getDishes():Observable<Dish[]>{
    return this.http.get<Dish[]>(baseURL+'dishes');  
  }

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(baseURL+'dishes/'+id);
}

  getfeatureDish():Observable<Dish>{
    return this.http.get<Dish>(baseURL+'dishes?featured=true')
    .pipe(map( dishes=>dishes[0]));
}

getDishIds():Observable<String[] | any>{
  return this.getDishes().pipe(map(dishes=>dishes.map(dish=>dish=>dish.id)));
}

}
