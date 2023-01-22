import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  discount = false;

  


  imwidth = '150';

  style = {'font-size': 'this.size', 'color': 'red'};


  poster = 'assets/img/img1.png';

  
  size = '15px';


  changeinp(color:any, img:any){
    this.style.color = color;
    this.poster = img;
    
  }


  leng = 'ka';

  lengs = [
    "ka",
    "eng",
    "ru",
    "fr"
  ]


  // appnam = {
  //   title: "ცვლადი",
  //   age: 24
  // }


  // imwidth = "200"


  // myimg = "/assets/img/imgs.png"


  users = [
    {
      name:"admin",
      role: 1,
      avatar: "assets/img/img1.png",
      phone:534535343,
      email:"info@admin.com",
      verify:true
    },
    {
      name:"admin",
      role: 1,
      avatar: "assets/img/img1.png",
      phone:534535343,
      email:"info@admin.com",
      verify:false,
      addre:[
        "მისამართი1",
        "მისამართი2",
        "მისამართი3",
        "მისამართი4",

      ],

      addreindex: 2,


    },
    {
      name:"admin",
      role: 1,
      avatar: "assets/img/img1.png",
      phone:534535343,
      email:"info@admin.com",
      verify:true
    },
    {
      name:"admin",
      role: 1,
      avatar: "assets/img/img1.png",
      phone:534535343,
      email:"info@admin.com",
      verify:false
    },
  ]



  title = new FormControl('');

  
  registerform = new  FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(''),
    body: new FormControl(''),
    color: new FormControl(''),
  })



  formdata(data:any){
    console.log(data)

  }
}
