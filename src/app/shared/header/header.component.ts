import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import HeaderChild from './header.object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showChild = false;
  headChilds: HeaderChild[] = [
    {icon: "", text: "About", url: "/app/about", isActive: false}
  ];
  logoFonts = "text-f-bebas";
  logoFontList = [
    'text-f-bebas',
    'text-f-permanent-mark',
    'text-f-fascinate',
    'text-f-shadow-into-light',
    'text-f-dancing',
  ]
  logoIndex = 0;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.randomize();
  }

  navigate(url:string){
    this.showChild = false;
    this.router.navigate([url]);
  }

  randomize(){
    setInterval(()=>{
      if(this.logoIndex==this.logoFontList.length)this.logoIndex = 0;
      this.logoFonts = this.logoFontList[this.logoIndex];
      this.logoIndex++;
    }, 2000);
  }
}
