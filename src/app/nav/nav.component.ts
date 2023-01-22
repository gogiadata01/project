import { NgIf } from '@angular/common';
import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
shownav = true;
constructor(
  private activaterouts:ActivatedRoute,
  private router:Router 
  ){
    
    router.events.subscribe((ev)=>{
      if(ev  instanceof NavigationEnd) {
        let page = window.location.href.split('/')[3]
        if (page == 'login') {
          this.shownav = false
        }else{
          this.shownav = true
        }
      }
    })

}






  @Input() color = "red"

  @Output() testdata = new EventEmitter<any>();

  
    ngOnInit(): void {

    }
  
    changeval(valu:any){
      this.testdata.emit(valu)
    }


  


}
