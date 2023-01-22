import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  checklogin(){
    let token = sessionStorage.getItem('token')
    if(token == "fsdfsdfsdfsdfsd*(435"){
      return true;
    }
    return false 
  }


  getdata(){
    return this.http.get('http://localhost:4200/assets/data.json')
  }

}
