import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsServService {

  constructor(
    private http:HttpClient
  ) { }

  GetComents(){
    return this.http.get('/assets/server/Comments.json')
  }
}
