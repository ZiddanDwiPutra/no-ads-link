import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/service/firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './app-landing.component.html',
  styleUrls: ['./app-landing.component.scss']
})
export class AppLandingComponent implements OnInit {
  title = 'no-ads-link';
  oriLink:string = "";
  oriLinkOption = {
    placeholder:"Example: facebook.com",
    msg: "",
    isValid: false
  }
  shortLinkOption = {
    placeholder:"Example: fbNoAds",
    msg: "",
    isValid: false
  }
  shortLink:string = "";

  isAvailable: boolean = false;
  showMessage: boolean = false;
  message :string = "";
  isValidToGenerate:boolean = false;
  
  constructor(
    private service: FirebaseService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ){
    this.activeRoute.params.subscribe(params=>{
      const {shortLink} = params;
      this.service.isExist(shortLink).then(isAvailable=>{
        if(isAvailable){
          
        }else this.router.navigateByUrl("app/not-found");
      });
    });
  }
  

  ngOnInit(): void {}
  toURLize(link: "oriLink"|"shortLink"){
    if(link == "oriLink"){
      let result = encodeURIComponent(decodeURIComponent(this.oriLink))
      this.oriLink = result;
    }else {
      let result = encodeURIComponent(decodeURIComponent(this.shortLink))
      this.shortLink = result;
    }
  }
  checkAvailability(){
    this.isAvailable = false;
    this.validate();
    this.toURLize('shortLink');
    if(this.shortLink.length<4)return;
    this.service.isExist(this.shortLink).then(res=>{
      this.isAvailable = !res;
      this.validate();
    });
  }
  validate(){
    this.isValidToGenerate = this.isAvailable && this.oriLink.length>0;
  }

  generate(){
    this.service.addShortLink(this.oriLink, this.shortLink).then(res=>{
      alert("Success");
    }).catch(e=>{
      console.error(e);
    });
  }
}
