import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-prod-detals',
  templateUrl: './prod-detals.component.html',
  styleUrls: ['./prod-detals.component.css']
})
export class ProdDetalsComponent implements OnInit {

  param:any = '';
  active:any = '';
  price:any = '';
  detalprods:any[''] = '';
  prod = [
    {
      id:2,
      body:"sdade",
      active:4,
    },
  ]

  constructor(private route:ActivatedRoute) {

    this.param = this.route.snapshot.params["id"];

      this.route.params.forEach((el:any)=>{
      this.active = el.active;
      this.price = el.price;
     })


    this.detalprods = this.prod.find((el:any)=>{
      return el.id == this.param && el.active == this.active;
    })
   

    console.log(this.active, this.price);
    
   }

ngOnInit(): void {
  
}

}
