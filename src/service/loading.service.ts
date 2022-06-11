import { Injectable } from '@angular/core';
import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingService extends OverlayService{
    constructor(){
        super();
    }
    showLoading(){
        this.showOverlay();
        this.showElement(".loading-wrapper");
    }
    hideLoading(){
        this.hideOverlay();
        this.hideElement(".loading-wrapper");
    }
}