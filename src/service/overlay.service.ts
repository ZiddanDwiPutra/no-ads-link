import {Injectable } from '@angular/core';
import { ElementQueries } from './element-queries.service';

@Injectable({
  providedIn: 'root',
})
export class OverlayService extends ElementQueries{
    constructor(){
        super();
    }

    showOverlay(){
        this.showElement(".overlay-wrapper");
    }
    hideOverlay(){
        this.hideElement('.overlay-wrapper');
    }
}