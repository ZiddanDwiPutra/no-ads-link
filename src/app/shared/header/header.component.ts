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

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url:string){
    this.showChild = false;
    this.router.navigate([url]);
  }

}
