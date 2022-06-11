import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { LoadingService } from 'src/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = "";
  mainAppClasses:string = "main-app";
  constructor(){}

  ngOnInit(): void {}


}
