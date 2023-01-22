import { Component, OnInit } from '@angular/core';
import { PostServService } from '../../Service/post-serv.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor( private postreq:PostServService ){}



  posts:any = '';
  findepost:any = ''

  ngOnInit(): void {

    this.postreq.getposts('ტესტი').subscribe((post)=>{
      this.posts = post;
      this.findepost= post;
    })
    
  }


  strLimit(slic:number, title:string){
    let nsstrinng = title.slice(0,slic)
    return  nsstrinng
  }

  timeout:any = '';

  findpost(val:any){

    clearTimeout(this.timeout)

    this.timeout = setTimeout(()=>{
      

      this.findepost = this.posts.filter((el:any)=>{
         return el.title.toLowerCase().search(val.toLowerCase()) !== -1 || el.id == val
      })

    }, 500)
  }


  
}
