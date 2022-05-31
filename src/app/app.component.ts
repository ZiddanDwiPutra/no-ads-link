import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'no-ads-link';
  oriLink:string = "facebook.co.id";
  shortLink:string = "";
  isAvailable = "";
  
  constructor(
    private service: FirebaseService
  ){}
  
  ngOnInit(): void {}
  
  checkAvailability(){
    console.log(this.shortLink);
    if(this.shortLink.length<3){
      this.isAvailable = "must be more equal than 4 characters";
      return;
    }
    this.service.isExist(this.shortLink).then(res=>{
      if(res)this.isAvailable = "not available";
      else this.isAvailable = "available";
    });
  }

  generate(){
    this.service.addShortLink(this.oriLink, this.shortLink).then(res=>{
      alert("Success");
    }).catch(e=>{
      console.error(e);
    });
  }
}
