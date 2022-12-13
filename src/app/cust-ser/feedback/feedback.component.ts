import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Feedback, HttpClientService } from 'src/app/http-client.service';



@Component({

  selector: 'app-feedback',

  templateUrl: './feedback.component.html',

  styleUrls: ['./feedback.component.css']

})

export class FeedbackComponent implements OnInit {

  name!:string;

  feed:Feedback={
    ftype:"",
    fname:"",
    femail:"",
    fmobile:"",
    fstaff:"",
    fbranch:"",
    fdesc:"",
  };




  constructor(private httpClientService:HttpClientService) { }



  ngOnInit(): void {

  }




  submit(form: NgForm){



     this.feed.ftype=form.value.type;

     this.feed.fname=form.value.name;

     this.feed.femail=form.value.email;

     this.feed.fmobile=form.value.mobile;

     this.feed.fstaff=form.value.staff;

     this.feed.fbranch=form.value.branch;

     this.feed.fdesc=form.value.desc;

    // console.log(this.iss);



    this.httpClientService.insFeedback(this.feed)

    .subscribe( data => {

      alert("Thank You For Your Feedback");

    });



  }




}