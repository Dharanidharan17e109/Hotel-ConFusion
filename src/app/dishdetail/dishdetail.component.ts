import { Component, Input, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Comment } from "../shared/comment";
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {


    dish:Dish;
    dishIds:String[];
    prev;
    next;
    commentForm:FormGroup;
    comment:Comment;
    ratingval=0;
    dt=new Date();
    dt_iso = this.dt.toISOString();
    errMess:String;


   

    formErrors={
      'author':'',
      'comment':''
    }

    validationMessages = {
      'author': {
        'required':      'Name is required.',
        'minlength':     'Name must be at least 2 characters long.',
        'maxlength':     'Name cannot be more than 25 characters long.'
      },
      'comment': {
        'required':      'Comments is required.',
        'minlength':     'Comments must be at least 2 characters long.'
            }
    };
    @ViewChild('fform') commentFormDirective;
    
  constructor(private dishService:DishService,private route:ActivatedRoute,private location:Location,private fb:FormBuilder,
    @Inject('baseURL') private baseURL) { 
    this.createForm();
  }

  createForm(){
    this.commentForm=this.fb.group({
      author:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating:5,
      comment:['',[Validators.required, Validators.minLength(2)]]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data),
      errmess => this.errMess = <any>errmess);

    this.onValueChanged();
  }
  

  ngOnInit():void {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); },
    errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack():void{
    this.location.back();
  }

  onSubmit(){
    this.comment=this.commentForm.value;
    this.comment.date=this.dt_iso;
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    
    this.commentForm.reset({
      author: ' ',
      rating:'5',
      comment:' '
    });
    this.commentFormDirective.resetForm();
  }
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
