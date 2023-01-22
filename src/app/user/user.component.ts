import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private usreser:LoginService){}

  ngOnInit(): void {
    this.usreser.getdata().subscribe((resp)=>{
      console.log(resp)
    })
  }

}
