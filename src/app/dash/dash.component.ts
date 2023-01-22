import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {


  loaded = false

 mytest = '';

  constructor() { }

  
  
  homecolor = "#000"

  ngOnInit(): void {

    setTimeout(() => {
      this.loaded = false
    }, 2000);
    
  }
   
  addItem(newItem:any){
    this.mytest = newItem
  }


  products = [
    {
      title:"ვაშლი",
      price: 6.56,
      calcprice:6,
      discount:false,
      gift: false,
      weight:[
        200,
        900,
        1000,
        500
      ],

      photogal:[
        "assets/img/apples.jpg",
        "assets/img/por.jpg",
        "assets/img/wotam.jpg",
        "assets/img/img1.png",
        "assets/img/img2.jpg",
      ],

      indexwei:0

    },
    {
      title:"ფორთოხალი",
      price: 7.56,
      calcprice:7.56,
      discount:false,
      gift: true,
      weight:[
        200,
        900,
        1000,
        500
      ],

      photogal:[
        "assets/img/apples.jpg",
        "assets/img/por.jpg",
        "assets/img/wotam.jpg",
        "assets/img/img1.png",
        "assets/img/img2.jpg",
      ],

      indexwei:4

    },
    {
      title:"საზამთრო",
      price: 8,
      calcprice:8,
      discount:true,
      gift: true,
      weight:[
        200,
        900,
        1000,
        500
      ],

      photogal:[
        "assets/img/apples.jpg",
        "assets/img/por.jpg",
        "assets/img/wotam.jpg",
        "assets/img/img1.png",
        "assets/img/img2.jpg",
      ],

      indexwei:3

    },
    {
      title:"მანქანა",
      price: 3.33,
      calcprice:3.33,
      discount:false,
      gift: false,
      weight:[
        200,
        900,
        1000,
        500
      ],

      photogal:[
        "assets/img/apples.jpg",
        "assets/img/por.jpg",
        "assets/img/wotam.jpg",
        "assets/img/img1.png",
        "assets/img/img2.jpg",
      ],

      indexwei:2

    },
    {
      title:"ობობა",
      price: 4.33,
      calcprice:4.33,
      discount:false,
      gift: true,
      weight:[
        200,
        900,
        1000,
        500
      ],

      photogal:[
        "assets/img/apples.jpg",
        "assets/img/por.jpg",
        "assets/img/wotam.jpg",
        "assets/img/img1.png",
        "assets/img/img2.jpg",
      ],

      indexwei:1

    },
    {
      title:"ბანანი",
      price: 4.56,
      calcprice:4.56,
      discount:false,
      gift: false,
      weight:[
        200,
        900,
        1000,
        500
      ],

      photogal:[
        "assets/img/apples.jpg",
        "assets/img/por.jpg",
        "assets/img/wotam.jpg",
        "assets/img/img1.png",
        "assets/img/img2.jpg",
      ],

      indexwei:4

    },
  ]

  sumprice(parent:any, wight:any){
    let newpric =(this.products[parent].price * this.products[parent].weight[wight]).toFixed(2); 
  this.products[parent].calcprice = Number(newpric);
  }


  changeimg(parent:any, img:any){
    this.products[parent].indexwei = img;
  }


  

}
