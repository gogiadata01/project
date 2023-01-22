import { Component, OnInit } from '@angular/core';
import { CommentsServService } from '../../Service/comments-serv.service';
import { ActivatedRoute } from '@angular/router';
import { PostServService } from '../../Service/post-serv.service';
@Component({
  selector: 'app-post-detals',
  templateUrl: './post-detals.component.html',
  styleUrls: ['./post-detals.component.css']
})
export class PostDetalsComponent implements OnInit {

  Coments:any = '';
  Posts:any = '';
  post_id:any = '';

  constructor(
    private coment:CommentsServService,
    private activaroute: ActivatedRoute,
    private post: PostServService
  ){
    this.post_id = activaroute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    //getcomment (array)
    this.coment.GetComents().subscribe((comnt:any)=>{
      this.Coments = comnt.filter((el:any)=>{
        return el.post_id == this.post_id
      });
    })

    //getpost (array)
      this.post.getposts('all').subscribe((post:any)=>{
      this.Posts= post.find((pos:any)=>{
        return pos.id == this.post_id
      });
    })
  }


}
