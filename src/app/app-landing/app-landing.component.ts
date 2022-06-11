import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/service/firebase.service';
import { LoadingService } from 'src/service/loading.service';

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
    private router: Router,
    private loadingService: LoadingService
  ){
    this.activeRoute.params.subscribe(params=>{
      const {shortLink} = params;
      this.loadingService.showLoading();
      this.service.isExist(shortLink).then(isAvailable=>{
        if(isAvailable){
          this.service.getLink(shortLink).then(res=>{
            if(res){
              open(this.fixLink(res['ori_link']), "_self");
            }else this.loadingService.hideLoading();
          });
        }else this.router.navigateByUrl("app/not-found");
      });
    });
  }

  fixLink(link:string){
    let isHttps = true;
    if(link.includes("http://")){
      link = link.replace(/http:\/\//g, '');
      isHttps = false
    }else if(link.includes("https://"))link = link.replace(/https:\/\//g, '');
    
    if(link.includes("www."))link = link.replace(/www.\/\//g, '');

    return isHttps? "https://"+link : "http://"+link;
  }
  

  ngOnInit(): void {}
  fixValidUrl(link:string){
    let result = encodeURIComponent(decodeURIComponent(link))
    .replace(/%2F/g, '_').replace(/%20/g, '_').replace(/%26/g, "_").replace(/%3F/g, "_");
    return result;
  }
  toURLize(link: "oriLink"|"shortLink"){
    if(link == "oriLink"){
      let result = this.fixValidUrl(this.oriLink)
      this.oriLink = result;
    }else {
      let result = this.fixValidUrl(this.shortLink)
      this.shortLink = result;
    }
  }
  checkAvailability(){
    this.isAvailable = false;
    this.validate();
    this.toURLize('shortLink');
    if(this.shortLink.length<4)return;
    return this.service.isExist(this.shortLink).then(res=>{
      this.isAvailable = !res;
      this.validate();
    });
  }
  validate(){
    this.isValidToGenerate = this.isAvailable && this.oriLink.length>0;
  }

  generate(){
    this.loadingService.showLoading();
    this.service.addShortLink(this.oriLink, this.shortLink).then(res=>{
      this.loadingService.hideLoading();
      
    }).catch(e=>{
      console.error(e);
    });
  }
  interactTo(num: number){
    if(num==2){
      this.generate();
    }
  }
  createNewLink(){
    location.reload();
  }
  copy(){
    let value = 'https://no-ads-link.web.app/'+this.shortLink;
    navigator.clipboard.writeText(value);
  }
}
