import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private User = {
    
    email:"info@gmail.com",
    pas:"123"
  }

  constructor(private router:Router){ }

  ngOnInit(): void {
    
  }

  userlogin = new FormGroup({
    email: new FormControl(),
    pass: new FormControl()
  })

  login(){
    let email = this.userlogin.value.email;
    let pass = this.userlogin.value.pass; 

    if(this.User.email == email && pass== this.User.pas){
     sessionStorage.setItem('token', 'fsdfsdfsdfsdfsd*(435')
 
     this.router.navigate(['/profile'])
    }
  }

}
